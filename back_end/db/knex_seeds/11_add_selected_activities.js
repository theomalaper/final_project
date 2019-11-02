exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('selected_activities').del(),
    knex.raw('ALTER SEQUENCE city_trips_id_seq RESTART WITH 1'),
    knex('selected_activities').then(function() {
      // Inserts seed entries
      return knex('selected_activities').insert([
        {
          activity_id: 25,
          city_trip_id: 2
        },
        {
          activity_id: 29,
          city_trip_id: 2
        }
      ]);
    }),
  ]);
};