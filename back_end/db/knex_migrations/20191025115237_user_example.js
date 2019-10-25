
exports.up = function(knex) {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary().unsigned();
    t.string('first_name').notNull();
    t.string('last_name').notNull();
    t.string('email').notNull();
    t.string('password').notNull();
    t.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
