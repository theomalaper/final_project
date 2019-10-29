exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('users').del(),
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
    knex('users').then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Bob',
          last_name: 'Dylan',
          email: 'bobdylan@gmail.com',
          password: 'test123',
        },
        {
          first_name: 'Bryan',
          last_name: 'Ward',
          email: 'bryanward@gmail.com',
          password: 'test123',
        },
        {
          first_name: 'Eugene',
          last_name: 'Flora',
          email: 'eugeneflora@gmail.com',
          password: 'test123',
        },
        {
          first_name: 'Amy',
          last_name: 'Justice',
          email: 'amyjustice@gmail.com',
          password: 'test123',
        },
        {
          first_name: 'Sandra',
          last_name: 'Martinez',
          email: 'sandramartinez@gmail.com',
          password: 'test123',
        },
      ]);
    }),
  ]);
};