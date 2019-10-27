exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('accommodation_types').del(),
    knex.raw('ALTER SEQUENCE accommodation_types_id_seq RESTART WITH 1'),
    knex('accommodation_types').then(function() {
      // Inserts seed entries
      return knex('accommodation_types').insert([
        {
          name: "Hostel"
        },
        {
          name: "AirBnB"
        },
        {
          name: "Hotel"
        },
      ]);
    }),
  ]);
};