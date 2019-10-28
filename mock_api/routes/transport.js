const express = require('express');
const router = express.Router();

module.exports = knex => {
  router.get('/:starting_city/:ending_city', function(req, res, next) {
    Promise.all([
      knex('transports').avg('price').where('transport_type_id', 1).andWhere('starting_city', req.params.starting_city).andWhere('ending_city', req.params.ending_city),
      knex('transports').avg('price').where('transport_type_id', 2).andWhere('starting_city', req.params.starting_city).andWhere('ending_city', req.params.ending_city),
      knex('transports').avg('price').where('transport_type_id', 3).andWhere('starting_city', req.params.starting_city).andWhere('ending_city', req.params.ending_city)
    ])
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
  return router;
};