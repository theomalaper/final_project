const request = require('request-promise-native');
const express = require('express');
const router = express.Router();

// Helper function that loops over each activity and adds its activity_links to it
const reformatActivities = activities => {
  const output = {};
  for(let activity of activities) {
    if (!output[activity.id]){
      output[activity.id] = activity;
      output[activity.id].link_types = [activity.link_type]
      output[activity.id].link_names = [activity.link_name]
      output[activity.id].link_urls = [activity.link_url]
    } else {
      output[activity.id].link_types.push(activity.link_type)
      output[activity.id].link_names.push(activity.link_name)
      output[activity.id].link_urls.push(activity.link_url)
    }
  }
  return Object.values(output);
};

module.exports = knex => {
  // GET Homepage
  router.get('/homepage', (req, res, next) => {
    knex
      .select('id', 'name', 'city_image', 'country')
      .from('cities')
      .then(result => {
        res.json(result)
      })
      .catch(err => console.log(err));
  });
  
  // GET Trip Page
  router.get('/trips/:trip_id', (req, res, next) => {
    // Information about the trip and each city added to the trip
    Promise.all([
      knex
        .select('name', 'isPlanning', 'starting_city', 'start_date', 'budget', 'traveller_nb', 'travel_type')
        .from('trips')
        .where('trips.id', req.params.trip_id),
      knex
        .select('cities.name', 'cities.coordinate_latitude', 'cities.coordinate_longitude', 'cities.avg_daily_expense', 'cities.city_image', 'city_trips.days', 'accommodations.type AS accomodation', 'accommodations.avg_cost AS accomodation_cost', 'transports.type AS transport', 'transports.avg_cost AS transport_cost')
        .from('cities')
        .innerJoin('city_trips', 'cities.id', 'city_trips.city_id')
        .innerJoin('trips', 'trips.id', 'city_trips.trip_id')
        .innerJoin('accommodations', 'accommodations.id', 'city_trips.accommodation_id')
        .innerJoin('transports', 'transports.id', 'city_trips.transport_id')
        .where('trips.id', req.params.trip_id)
      ])
    .then(data => res.json(data))
    .catch(err => console.log(err));
  });

  // POST Trip Page when submitting homepage's form
  router.post('/trips', (req, res, next) => {
    knex('trips')
      .insert({
        isPlanning: true,
        traveller_nb: req.body.trip.travellerNb,
        travel_type: req.body.trip.type,
        budget: req.body.trip.budget,
        starting_city: req.body.trip.startingCity, 
        start_date: req.body.trip.startDate,
        zone_id: req.body.trip.zone,
        user_id: 1
      })
      .returning("*")
      .then((result) => {
        res.json(result[0])
      })
      .catch(err => console.log(err));
  });

  // PUT Trip Page when saving the trip
  router.put('/trips/:id', (req, res, next) => {
    knex('trips')
      .where('id', req.params.id)
      .update({name: req.body.name}, {is_planning: false})
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  });

  // DELETE Trip
  router.delete('/trips/:id', (req, res, next) => {
    knex('trips')
      .where({ id: req.params.id })
      .del()
      .then(() => res.redirect('/'))
      .catch(err => console.log(err));
  });

  // GET City Page
  router.get('/trips/:trips_id/cities/:city_id', (req, res, next) => {
    Promise.all([
      // Information about the city
      knex
        .select('cities.name', 'cities.description', 'cities.city_image as image', 'cities.coordinate_latitude', 'cities.coordinate_longitude', 'cities.zoom')
        .from('cities')
        .where("cities.id", req.params.city_id),
      
      // Information about the activities in that city
      knex
        .select('activities.id', 'activities.name', 'activities.description', 'activities.activity_image', 'activity_links.name AS link_name', 'activity_links.type AS link_type', 'activity_links.url AS link_url')
        .from('activities')
        .innerJoin('activity_links', 'activities.id', 'activity_id')
        .where('activities.city_id', req.params.city_id),

      // Information about cities already added in the trip to add them on the map
      knex
        .select('coordinate_latitude', 'coordinate_longitude')
        .from('cities')
        .innerJoin('city_trips', 'city_id', 'cities.id')
        .innerJoin('trips', 'trips.id', 'trip_id')
        .where('trips.id', req.params.trips_id),
      
      // Avg price of hostels in that city
      request({uri:'http://localhost:3003/api/accommodation/hostel/' + req.params.city_id, json:true}),

      request({uri:'http://localhost:3003/api/accommodation/airbnb/' + req.params.city_id, json:true}),

      request({uri:'http://localhost:3003/api/accommodation/hotel/' + req.params.city_id, json:true}),

    ])
      .then(data => {
        res.json([data[0], reformatActivities(data[1]), data[2], data[3], data[4], data[5]]);
      })
      .catch(error => {
        console.log(error);
      });
  });

  // POST New City when saving a city in the trip
  router.post('/trips/:trip_id/cities/:city_id', (req, res, next) => {
    Promise.all([
      // We insert in transports and accommodations first because we need their IDs to insert them in the city_trips
      knex('transports').insert({type: req.body.type}, {avg_cost: req.body.average_cost}),
      knex('accommodations').insert({type: req.body.type}, {avg_cost: req.body.average_cost})
    ])
      .then((data) => {
        knex('city_trips').insert({city_id: req.params.city_id}, {trip_id: req.params.trip_id}, {duration: req.body.duration}, {transport_id: data[0].id}, {accommodation_id: data[1].id})
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
      });
  });
  return router
};