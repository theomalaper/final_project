
exports.up = function(knex) {
  return knex.schema.createTable('cities', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
    t.text('description').notNull();
    t.float('coordinate_latitude').notNull();
    t.float('coordinate_longitude').notNull();
    t.float('zoom').notNull();
    t.integer('avg_daily_expense').notNull();
    t.string('city_image').notNull();
    t.string('country').notNull();
    t.integer('zone_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('zones')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cities')
};
