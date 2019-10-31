
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('accommodations').del(),
    knex.raw('ALTER SEQUENCE accommodations_id_seq RESTART WITH 1'),
    knex('accommodations').then(function() {
      // Inserts seed entries
      return knex('accommodations').insert([
        {
          type: "Hostel",
        },
        {
          type: "AirBnB",
        },
        {
          type: "Plane",
        },
      ]);
    }),
  ]);
};