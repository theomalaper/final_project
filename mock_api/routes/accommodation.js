const express = require('express');
const router = express.Router();

module.exports = knex => {
  router.get('/:city_id', function(req, res, next) {
    Promise.all([
      knex('accommodations').avg('price').where("accommodation_type_id", 1).andWhere('city_id', req.params.city_id),
      knex('accommodations').avg('price').where("accommodation_type_id", 2).andWhere('city_id', req.params.city_id),
      knex('accommodations').avg('price').where("accommodation_type_id", 3).andWhere('city_id', req.params.city_id)
    ])
      .then(result => {
        res.json(result[0]);
      })
      .catch(error => {
        console.log(error);
      });
  });
  return router;
};

