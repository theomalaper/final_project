
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('transport_types').del(),
    knex.raw('ALTER SEQUENCE transport_types_id_seq RESTART WITH 1'),
    knex('transport_types').then(function () {
      // Inserts seed entries
      return knex('transport_types').insert([
        {
          name: 'bus'
        },
        {
          name: 'train'
        },
        {
          name: 'plane'
        },
      ]); 
    }),
  ]);
};
