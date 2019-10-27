
exports.up = function(knex) {
  return knex.schema.createTable('accommodations', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
    t.integer('price').notNull();
    t.string('image_url');
    t.integer('accommodation_type_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('accommodation_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('city_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('cities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('accommodations');
};
