
exports.up = function(knex) {
  return knex.schema.createTable('companies', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('companies');
};
