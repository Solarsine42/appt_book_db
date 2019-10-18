const knex = require("../db/knex");

exports.getAllAppts = function(req, res) {
  knex
    .select()
    .table("appts")
    .then(appts => res.json(appts));
};

exports.getOneAppt = function(req, res) {
  knex
    .select()
    .table("appts")
    .where("id", req.params.id)
    .then(appt => res.json(appt));
};

exports.addOneAppt = function(req, res) {
  knex("appts")
    .insert(req.body)
    .returning("*")
    .then(newAppt => res.json(newAppt));
};

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

exports.removeOneAppt = function(req, res) {
  knex("appts")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newAppt => res.json(newAppt));
};
