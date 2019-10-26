
exports.up = function(knex) {
  return knex.schema.createTable('activities', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
    t.text('description').notNull();
    t.boolean('is_pinned').notNull();
    t.integer('city_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('cities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('activities')
};
