
exports.up = function(knex) {
  return knex.schema.createTable('zones', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
    t.float('coordinate_longitude').notNull();
    t.float('coordinate_latitude').notNull();
    t.float('zoom').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('zones')
};
