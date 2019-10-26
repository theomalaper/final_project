
exports.up = function(knex) {
  return knex.schema.createTable('maps', t => {
    t.increments('id').primary().notNull().unsigned();
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
  return knex.schema.dropTable('maps')
};
