const dbConfig = require("../config/db.config.js");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.ROLES = ["user", "admin", "moderator"];
db.url = dbConfig.url;
db.hackathones = require("./hackathone.model.js")(mongoose);
db.quizzes = require("./quiz.model.js")(mongoose);
db.user = require("./user.model");
db.participants=require("./Participant.model.js")(mongoose);
db.Entreprise=require("./Entreprise.model.js")(mongoose);
db.Equipe=require("./Equipe.model.js")(mongoose);
db.role = require("./role.model");

module.exports = db;
