exports.up = function(knex) {
  return knex.schema.createTable("appts", function(table) {
    table.increments();
    table.integer("location_id").notNullable();
    table.datetime("appt_date").notNullable();
    table.string("note");
    table.boolean("completed");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("appts");
};
