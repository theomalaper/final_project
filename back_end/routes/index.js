const request = require('request-promise-native');
const express = require('express');
const router = express.Router();

// Helper function that loops over each activity and adds its activity_links to it as each activity has 2 link and is being duplicated in the res.json
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

// Helper function that loop over each city and adds the activities to it, to avoid the duplication of cities having multiple selected activities in the res.json
const reformatCities = cities => {
  const output = {};
  for(let city of cities) {
    if (!output[city.id]) {
      output[city.id] = city
    }

    if (output[city.id].activity_id && !output[city.id].activities) {
      output[city.id].activities = [{
        activity_id: city.activity_id,
        activity_name: city.activity_name,
        activity_description: city.activity_description,
        activity_image: city.activity_image,
        activity_links: [{
          id: city.link_id,
          type: city.link_type,
          name: city.link_name,
          url: city.link_url
        }]
      }];
    } else if (output[city.id].activity_id) {
      const link = {
        id: city.link_id,
        type: city.link_type,
        name: city.link_name,
        url: city.link_url
      };
      
      const activity = {
        activity_id: city.activity_id,
        activity_name: city.activity_name,
        activity_description: city.activity_description,
        activity_image: city.activity_image,
        activity_links: [link]
      };

      const found = output[city.id].activities.find(e => e.activity_id === city.activity_id);
      if (found) {
        found.activity_links.push(link)

      } else {
      output[city.id].activities.push(activity)
      }
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
        .select('trips.name', 'isPlanning', 'starting_city', 'start_date', 'budget', 'traveller_nb', 'travel_type', 'zones.name AS zone', 'zones.coordinate_longitude', 'zones.coordinate_latitude', 'zones.zoom')
        .from('trips')
        .innerJoin('zones', 'trips.zone_id', 'zones.id')
        .where('trips.id', req.params.trip_id),
      knex
        .select('city_trips.id', 'cities.id AS city_id', 'cities.name', 'cities.country', 'cities.coordinate_latitude', 'cities.coordinate_longitude', 'cities.avg_daily_expense', 'cities.city_image', 'city_trips.days', 'accommodations.type AS accomodation_type', 'city_trips.avg_accommodation_cost AS accomodation_cost', 'transports.type AS transport_type', 'city_trips.avg_transport_cost AS transport_cost', 'activities.id AS activity_id', 'activities.name AS activity_name', 'activities.description AS activity_description', 'activities.activity_image', 'activity_links.id AS link_id', 'activity_links.type AS link_type', 'activity_links.name AS link_name', 'activity_links.url AS link_url')
        .from('cities')
        .innerJoin('city_trips', 'cities.id', 'city_trips.city_id')
        .innerJoin('trips', 'trips.id', 'city_trips.trip_id')
        .innerJoin('accommodations', 'accommodations.id', 'city_trips.accommodation_id')
        .innerJoin('transports', 'transports.id', 'city_trips.transport_id')
        .leftJoin('selected_activities', 'selected_activities.city_trip_id', 'city_trips.id')
        .leftJoin('activities', 'selected_activities.activity_id', 'activities.id')
        .leftJoin('activity_links', 'activity_links.activity_id', 'activities.id')
        .where('trips.id', req.params.trip_id)
      ])
    .then(data => res.json([data[0], reformatCities(data[1])]))
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
        starting_city: knex.select('id').from('cities').where('name', req.body.trip.startingCity),
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

  router.get('/homepage-redirection/:starting_city', (req, res, next) => {
    knex.select('ending_city')
      .from('city_distances')
      .where('starting_city', parseInt(req.params.starting_city))
      .andWhere('distance', '<=', 506.0)
      .then((result) => {
        res.json(result)
      })
      .catch(err => console.log(err));
  })

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
  router.get('/trips/:trip_id/cities/:city_id', (req, res, next) => {

    const promise = city_id => {
    
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
          .select('cities.id', 'coordinate_latitude', 'coordinate_longitude')
          .from('cities')
          .innerJoin('city_trips', 'city_id', 'cities.id')
          .innerJoin('trips', 'trips.id', 'trip_id')
          .where('trips.id', req.params.trip_id),
        
        // Avg prices of accommodations in that city
        request({uri:`http://localhost:3003/api/accommodation/hostel/${req.params.city_id}`, json:true}),
        request({uri:`http://localhost:3003/api/accommodation/airbnb/${req.params.city_id}`, json:true}),
        request({uri:`http://localhost:3003/api/accommodation/hotel/${req.params.city_id}`, json:true}),

        // Avg prices of transports to that city
        request({uri:`http://localhost:3003/api/transport/bus/${city_id[0].starting_city}/${req.params.city_id}`, json:true}),
        request({uri:`http://localhost:3003/api/transport/train/${city_id[0].starting_city}/${req.params.city_id}`, json:true}),
        request({uri:`http://localhost:3003/api/transport/plane/${city_id[0].starting_city}/${req.params.city_id}`, json:true})

      ])
        .then(data => {
          res.json([data[0], reformatActivities(data[1]), data[2], data[3], data[4], data[5], data[6], data[7], data[8]]);
        })
        .catch(error => {
          console.log(error);
        });
    }

    knex.first('city_id').from('city_trips').where('trip_id', req.params.trip_id).orderBy('created_at', 'desc').then(data => {
      if (!data) {
        knex.select('starting_city').from('trips').where('trips.id', req.params.trip_id).then(promise).catch(err => console.log(err))
      } else {
        promise(data)
      }
    })

    // Making a first promise to fetch the IDs needed for the request to the transport api, then we do all the other requests with the
    // knex.select('starting_city').from('trips').where('trips.id', req.params.trip_id).then(
    // })
    .catch(err => console.log(err));
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