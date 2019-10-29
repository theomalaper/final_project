
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('zones').del(),
    knex.raw('ALTER SEQUENCE zones_id_seq RESTART WITH 1'),
    knex('zones').then(function() {
      // Inserts seed entries
      return knex('zones').insert([
        {
          name: 'Europe',
          coordinate_longitude: 7.2551,
          coordinate_latitude: 47.5260,
          zoom: 3.8,
        },
      ]);
    }),
  ]);
};