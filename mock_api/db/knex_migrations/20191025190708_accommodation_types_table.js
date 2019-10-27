
exports.up = function(knex) {
  return knex.schema.createTable('accommodation_types', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('accommodation_types');
};
