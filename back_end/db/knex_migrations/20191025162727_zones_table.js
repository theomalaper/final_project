
exports.up = function(knex) {
  return knex.schema.createTable('zones', t => {
    t.increments('id').primary().notNull().unsigned();
    t.string('name').notNull();
    t.float('coordinate_longitude');
    t.float('coordinate_latitute');
    t.float('zoom')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('zones')
};
