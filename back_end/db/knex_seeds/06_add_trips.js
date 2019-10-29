
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('trips').del(),
    knex.raw('ALTER SEQUENCE trips_id_seq RESTART WITH 1'),
    knex('trips').then(function() {
      // Inserts seed entries
      return knex('trips').insert([
        {
          name: "Europe 2019",
          isPlanning: false,
          starting_city: "Madrid",
          start_date: "2019-10-20",
          budget: 4000,
          traveller_nb: 1,
          travel_type: "casual",
          user_id: 1,
        },
      ]);
    }),
  ]);
};
