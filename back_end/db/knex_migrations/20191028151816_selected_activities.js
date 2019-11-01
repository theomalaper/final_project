
exports.up = function(knex) {
  return knex.schema.createTable('selected_activities', t => {
    t.increments('id').primary().notNull().unsigned();
    t.integer('activity_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('activities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('city_trip_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('city_trips')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('selected_activities')
};