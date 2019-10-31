
exports.up = function(knex) {
  return knex.schema.createTable('city_trips', t => {
    t.increments('id').primary().notNull().unsigned();
    t.integer('days').notNull();
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
    t.integer('avg_accommodation_cost').notNull();
    t.integer('transport_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('transports')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('avg_transport_cost').notNull();
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('city_trips')
};
