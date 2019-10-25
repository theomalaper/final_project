
exports.up = function(knex) {
  return knex.schema.createTable('transports', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('type').notNull();
    t.integer('avg_cost').notNull();
    t.integer('avg_duration').notNull();
  }) 
};

exports.down = function(knex) {
  return knex.schema.dropTable('transports')
};
