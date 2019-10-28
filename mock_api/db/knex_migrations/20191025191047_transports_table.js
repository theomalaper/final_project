
exports.up = function(knex) {
  return knex.schema.createTable('transports', t => {
    t.increments('id').primary().notNull().unsigned();
    t.integer('company_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('companies')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('price').notNull();
    t.integer('duration');
    t.integer('transport_type_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('transport_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('starting_city')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('cities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('ending_city')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('cities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('transports')
};
