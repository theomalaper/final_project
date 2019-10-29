
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('accommodations').del(),
    knex.raw('ALTER SEQUENCE accommodations_id_seq RESTART WITH 1'),
    knex('accommodations').then(function() {
      // Inserts seed entries
      return knex('accommodations').insert([
        {
          type: "AirBnB",
          avg_cost: 38,
        },
        {
          type: "Hostel",
          avg_cost: 25,
        },
      ]);
    }),
  ]);
};