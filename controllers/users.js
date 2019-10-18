const knex = require("../db/knex");

exports.getAllUsers = function(req, res) {
  knex
    .select()
    .table("users")
    .then(users => res.json(users));
};

exports.getOneUser = function(req, res) {
  knex
    .select()
    .table("user")
    .where("id", req.params.id)
    .then(user => res.json(user));
};

exports.addOneUser = function(req, res) {
  knex("user")
    .insert(req.body)
    .returning("*")
    .then(newUser => res.json(newUser));
};

exports.updateOneUser = function(req, res) {
  knex("user")
    .update(req.body)
    .where("id", req.params.id)
    .returning("*")
    .then(updatedUser => res.json(updatedUser));
};

exports.removeOneUser = function(req, res) {
  knex("user")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newUser => res.json(newUser));
};
