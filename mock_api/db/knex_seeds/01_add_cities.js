exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('cities').del(),
    knex.raw('ALTER SEQUENCE cities_id_seq RESTART WITH 1'),
    knex('cities').then(function() {
      // Inserts seed entries
      return knex('cities').insert([
        {
          name: "Madrid"
        },
        {
          name: "Valencia"
        },
        {
          name: "Bilbao"
        },
        {
          name: "Zaragoza"
        },
        {
          name: "Barcelona"
        },
        {
          name: "Toulouse"
        },
        {
          name: "Marseille"
        },
        {
          name: "Nice"
        },
        {
          name: "Lyon"
        },
        {
          name: "Turin"
        },
        {
          name: "Milan"
        },
        {
          name: "Geneva"
        },
        {
          name: "Zurich"
        },
        {
          name: "Strasbourg"
        },
        {
          name: "Paris"
        },
        {
          name: "Brussels"
        },
        {
          name: "Antwerp"
        },
        {
          name: "Amsterdam"
        },
        {
          name: "Frankfurt"
        },
        {
          name: "Cologne"
        },
      ]);
    }),
  ]);
};