
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('companies').del(),
    knex.raw('ALTER SEQUENCE companies_id_seq RESTART WITH 1'),
    knex('companies').then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {
          name: 'AirEuropa'
        },
        {
          name: 'Iberia'
        },
        {
          name: 'Avanza'
        },
        {
          name: 'Renfe'
        },
        {
          name: 'Alsa'
        },
        {
          name: 'Vueling'
        },
        {
          name: 'BlaBlaBus'
        },
        {
          name: 'Eurolines'
        },
        {
          name: 'Easyjets'
        },
        {
          name: 'Eurowings'
        },
        {
          name: 'SNCF'
        },
        {
          name: 'Ryanair'
        },
        {
          name: 'Airfrance'
        },
        {
          name: 'Flixbus'
        },
        {
          name: 'Trenitalia'
        },
        {
          name: 'Infobus'
        },
        {
          name: 'Marinobus'
        },
        {
          name: 'Italo'
        },
        {
          name: 'SBB'
        },
        {
          name: 'Swiss'
        },
        {
          name: 'DB'
        },
        {
          name: 'TGV lyria'
        },
        {
          name: 'KLM'
        },
        {
          name: 'SAS'
        },
        {
          name: 'SWEG'
        },
        {
          name: 'inOui'
        },
        {
          name: 'Thalys'
        },
        {
          name: 'Transavia'
        },
        {
          name: 'Lufthansa'
        },
        {
          name: 'IC'
        },
      ]);
    }),
  ]);
};
