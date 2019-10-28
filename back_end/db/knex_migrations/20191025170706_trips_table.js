
exports.up = function(knex) {
  return knex.schema.createTable('trips', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
    t.boolean('isPlanning').notNull();
    t.string('starting_city').notNull();
    t.date('start_date').notNull();
    t.bigInteger('budget');
    t.integere('traveller_nb');
    t.string('travel_type');
    t.integer('user_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.integer('map_id')
      .notNull()
      .unsigned()
      .references('id')
      .inTable('maps')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('trips')
};
