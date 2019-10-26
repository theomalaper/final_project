
exports.up = function(knex) {
  return knex.schema.createTable('activity_links', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
    t.string('url').notNull();
    t.string('type').notNull();
    t.integer('activity_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('activities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('activity_links')
};
