
exports.up = function(knex) {
  return knex.schema.createTable('cities', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cities');
};
