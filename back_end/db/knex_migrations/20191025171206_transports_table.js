
exports.up = function(knex) {
  return knex.schema.createTable('transports', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('type').notNull();
  }) 
};

exports.down = function(knex) {
  return knex.schema.dropTable('transports')
};
