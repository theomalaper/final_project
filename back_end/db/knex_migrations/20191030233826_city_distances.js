
exports.up = function(knex) {
  return knex.schema.createTable('city_distances', t => {
    t.increments('id').primary().notNull().unsigned()
    t.integer('starting_city')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('cities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('ending_city')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('cities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    t.float('distance').notNull
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('city_distances')
};
