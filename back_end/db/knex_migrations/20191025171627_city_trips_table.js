
exports.up = function(knex) {
  return knex.schema.createTable('city_trips', t => {
    t.increments('id').primary().notNull().unsigned();
    t.date('start_date').notNull();
    t.date('end_date').notNull();
    t.integer('city_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('cities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('trip_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('trips')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('accommodation_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('accommodations')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('transport_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('transports')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('city_trips')
};
