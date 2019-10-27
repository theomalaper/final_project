
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('companies').del(),
    knex.raw('ALTER SEQUENCE companies_id_seq RESTART WITH 1'),
    knex('companies').then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {
          name: 'rowValue1'
        },
        {
          name: 'rowValue2'
        },
        {
          name: 'rowValue3'
        }
      ]);
    }),
  ]);
};
