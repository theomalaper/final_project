
exports.up = function(knex) {
  return knex.schema.createTable('accommodations', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('type').notNull();
    t.integer('avg_cost').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('accommodations');
};
