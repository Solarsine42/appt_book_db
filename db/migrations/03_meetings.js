exports.up = function(knex) {
  return knex.schema.createTable("meetings", function(table) {
    table.increments();
    table
      .integer("locationId")
      .references("location_id")
      .inTable("appts")
      .notNullable();
    table
      .datetime("datetime")
      .references("appt_date")
      .inTable("appts")
      .notNullable();
    table
      .string("notes")
      .references("note")
      .inTable("appts");
    table
      .integer("requestorId")
      .references("requestor_id")
      .inTable("users")
      .notNullable();
    table
      .integer("requesteeId")
      .references("requestee_id")
      .inTable("users")
      .notNullable();
    table.boolean("completed");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("appts");
};
