exports.up = function(knex) {
  return knex.schema.createTable("appts", function(table) {
    table.increments();
    table.integer("location_id").notNullable();
    table.date("appt_date", { precision: 6 }).notNullable();
    table.time("appt_time", { precision: 6 }).notNullable();
    table.string("note");
    table
      .integer("requestor_id")
      .references("id")
      .inTable("users")
      .onDelete("cascade")
      .notNullable();
    table
      .integer("requestee_id")
      .references("id")
      .inTable("users")
      .onDelete("cascade")
      .notNullable();
    table.boolean("completed");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("appts");
};
