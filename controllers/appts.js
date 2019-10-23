const knex = require("../db/knex");

//get all
exports.getAllAppts = function(req, res) {
  knex
    .select()
    .table("appts")
    .then(appts => res.json(appts));
};
//get one
exports.getOneAppt = function(req, res) {
  knex
    .select()
    .table("appts")
    .where("id", req.params.id)
    .then(appt => res.json(appt));
};
//add one
exports.addOneAppt = function(req, res) {
  knex("appts")
    .insert(req.body)
    .returning("*")
    .then(newAppt => res.json(newAppt));
};
//modify one
exports.updateOneAppt = function(req, res) {
  knex("appts")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedAppt => res.json(updatedAppt));
};
//delete one
exports.removeOneAppt = function(req, res) {
  knex("appts")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newAppt => res.json(newAppt));
};
