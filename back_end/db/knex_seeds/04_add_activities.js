
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('activities').del(),
    knex.raw('ALTER SEQUENCE activities_id_seq RESTART WITH 1'),
    knex('activities').then(function() {
      // Inserts seed entries
      return knex('activities').insert([
        {

        },
      ]);
    }),
  ]);
};
