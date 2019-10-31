
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('transports').del(),
    knex.raw('ALTER SEQUENCE transports_id_seq RESTART WITH 1'),
    knex('transports').then(function() {
      // Inserts seed entries
      return knex('transports').insert([
        {
          type: "Bus",
        },
        {
          type: "Train",
        },
        {
          type: "Plane",
        },
      ]);
    }),
  ]);
};