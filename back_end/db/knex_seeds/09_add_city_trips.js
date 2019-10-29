
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('city_trips').del(),
    knex.raw('ALTER SEQUENCE city_trips_id_seq RESTART WITH 1'),
    knex('accommodations').then(function() {
      // Inserts seed entries
      return knex('city_trips').insert([
        {
          days: 3,
          city_id: 2,
          trip_id: 1,
          accommodation_id: 1,
          transport_id: 1,
        },
        {
          days: 2,
          city_id: 5,
          trip_id: 1,
          accommodation_id: 2,
          transport_id: 2,
        },
      ]);
    }),
  ]);
};