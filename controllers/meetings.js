const knex = require("../db/knex");

//get all
exports.getAllMeetings = function(req, res) {
  knex("meetings")
    .join("contacts", "users.id", "=", "contacts.user_id")
    .select("users.id", "contacts.phone")
    .table("meetings")
    .then(meetings => res.json(meetings));
};
//get one
exports.getOneMeeting = function(req, res) {
  knex("meetings")
    .join("contacts", "users.id", "=", "contacts.user_id")
    .select("users.id", "contacts.phone")
    .table("meetings")
    .where("id", req.params.id)
    .then(meeting => res.json(meeting));
};
//add one
exports.addOneMeeting = function(req, res) {
  knex("meetings")
    .insert(req.body)
    .returning("*")
    .then(newMeeting => res.json(newMeeting));
};
//modify one
exports.updateOneMeeting = function(req, res) {
  knex("meetings")
    .update(req.body)
    .where("id", req.params.id)
    .returning("*")
    .then(updatedMeeting => res.json(updatedMeeting));
};
//delete one
exports.removeOneMeeting = function(req, res) {
  knex("meetings")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newMeeting => res.json(newMeeting));
};
