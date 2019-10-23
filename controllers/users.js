const knex = require("../db/knex");

//get all
exports.getAllUsers = function(req, res) {
  knex
    .select()
    .table("users")
    .then(users => res.json(users));
};
//get one
exports.getOneUser = function(req, res) {
  knex
    .select()
    .table("user")
    .where("id", req.params.id)
    .then(user => res.json(user));
};
//add one
exports.addOneUser = function(req, res) {
  knex("user")
    .insert(req.body)
    .returning("*")
    .then(newUser => res.json(newUser));
};
//modify one
exports.updateOneUser = function(req, res) {
  knex("user")
    .update(req.body)
    .where("id", req.params.id)
    .returning("*")
    .then(updatedUser => res.json(updatedUser));
};
//delete one
exports.removeOneUser = function(req, res) {
  knex("user")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newUser => res.json(newUser));
};
