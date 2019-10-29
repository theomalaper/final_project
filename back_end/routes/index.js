const express = require('express');
const router = express.Router();

// GET Homepage
module.exports = knex => {
  router.get('/', (req, res, next) => {
    knex
      .select('id', 'name', 'url')
      .from('cities')
      .then((data) => res.json(data[0]))
      .catch(err => console.log(err));
  });
  
  // GET Trip Page
  router.get('/trips/:trip_id', (req, res, next) => {
    // Information about the trip and each city added to the trip
    knex
      .select('trips.name', 'trips.start_date', 'cities.name', 'cities.coordinate_latitude', 'cities.coordinate_longitude', 'cities.avg_daily_expense', 'city_image', 'city_trips.days', 'activities.name', 'accommodations.type', 'accommodations.avg_cost', 'transports.type', 'transports.avg_cost')
      .from('trips')
      .innerJoin('city_trips', 'trips.id', 'trip_id')
      .innerJoin('cities', 'cities.id', 'city_trips.city_id')
      .innerJoin('activities', 'activities.city_id', 'cities.id')
      .innerJoin('transports', 'transports.id', 'transport_id')
      .innerJoin('accommodations', 'accommodations.id', 'accommodation_id')
      .where('trips.id', req.params.trip_id)
      .then(data => res.json(data[0]))
      .catch(err => console.log(err));
  });


  // POST Trip Page when submitting homepage's form
  router.post('/trips', (req, res, next) => {
    knex('trips')
      .insert({is_planning: true}, {type: req.body.nb_people}, {type: req.body.type}, {budget: req.body.budget}, {starting_city: req.body.starting_city})
      .then(() => res.redirect('/cities/2'))
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
  router.get('trips/:trips_id/cities/:city_id', (req, res, next) => {
    Promise.all([
      // Information about the city and its activities
      knex
        .select('cities.name', 'cities.coordinate_latitude', 'cities.coordinate_longitude', 'cities.zoom', 'activities.id', 'activieis.name', 'activities.description', 'activities.is_pinned', 'activities.url', 'activity_links.name', 'activity_links.type', 'activity_links.url')
        .from('cities')
        .innerJoin('activities', 'cities.id', 'city_id')
        .innerJoin('activity_links', 'activities.id', 'activity_id')
        .where("cities.id", req.params.city_id),
      
      // Information about cities already added in the trip to add them on the map
      knex
        .select('coordinate_latitude', 'coordinate_longitude').from('cities')
        .innerJoin('city_trips', 'city_id', 'cities.id')
        .innerJoin('trips', 'trips.id', 'trip_id')
        .where('trip_id', 'trips.id')
    ])
      .then(data => {
        res.json(data[0]);
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