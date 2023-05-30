module.exports = app => {
    const Quizs = require("../controllers/Quiz.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Quiz
    router.post("/", Quizs.create);
  
    // Retrieve all hackathons
    router.get("/", Quizs.findAll);
  
    // Retrieve all published hackathons
    router.get("/published", Quizs.findAllPublished);
  
    // Retrieve a single Quiz with id
    router.get("/:id", Quizs.findOne);
  
    // Update a Quiz with id
    router.put("/:id", Quizs.update);
  
    // Delete a Quiz with id
    router.delete("/:id", Quizs.delete);
  
    // Create a new Quiz
    router.delete("/", Quizs.deleteAll);
  
    app.use("/api/qui", router);
  };
  