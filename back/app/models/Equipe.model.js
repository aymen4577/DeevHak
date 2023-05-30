const mongoose = require("mongoose");

const Equipe = mongoose.model(
  "Equipe",
  new mongoose.Schema({
    name: String,
    Membre: Number,
    Sujet: String,

  })
);

module.exports = Equipe;
