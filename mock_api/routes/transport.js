const express = require('express');
const router = express.Router();

module.exports = knex => {
  router.get('/bus/:starting_city/:ending_city', function(req, res, next) {
    knex('transports').avg('price').where('transport_type_id', 1).andWhere('starting_city', req.params.starting_city).andWhere('ending_city', req.params.ending_city)
      .then(result => {
        if (result[0].avg === null) {
          knex('transports').avg('price').where('transport_type_id', 1).andWhere('starting_city', req.params.ending_city).andWhere('ending_city', req.params.starting_city)
          .then(result => res.json(result[0]))
          .catch(err => console.log(err))
        } else {
        res.json(result[0]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });


  router.get('/train/:starting_city/:ending_city', function(req, res, next) {
    knex('transports').avg('price').where('transport_type_id', 2).andWhere('starting_city', req.params.starting_city).andWhere('ending_city', req.params.ending_city)
      .then(result => {
        if (result[0].avg === null) {
          knex('transports').avg('price').where('transport_type_id', 2).andWhere('starting_city', req.params.ending_city).andWhere('ending_city', req.params.starting_city)
          .then(result => res.json(result[0]))
          .catch(err => console.log(err))
        } else {
        res.json(result[0]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });


  router.get('/plane/:starting_city/:ending_city', function(req, res, next) {
    knex('transports').avg('price').where('transport_type_id', 3).andWhere('starting_city', req.params.starting_city).andWhere('ending_city', req.params.ending_city)
      .then(result => {
        if (result[0].avg === null) {
          knex('transports').avg('price').where('transport_type_id', 3).andWhere('starting_city', req.params.ending_city).andWhere('ending_city', req.params.starting_city)
          .then(result => res.json(result[0]))
          .catch(err => console.log(err))
        } else {
        res.json(result[0]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
  return router;
};