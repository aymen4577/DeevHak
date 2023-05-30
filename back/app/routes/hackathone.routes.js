module.exports = app => {
  const hackathones = require("../controllers/hackathone.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", hackathones.create);

  // Retrieve all hackathons
  router.get("/", hackathones.findAll);

  // Retrieve all published hackathons
  router.get("/published", hackathones.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", hackathones.findOne);

  // Update a Tutorial with id
  router.put("/:id", hackathones.update);

  // Delete a Tutorial with id
  router.delete("/:id", hackathones.delete);

  // Create a new Tutorial
  router.delete("/", hackathones.deleteAll);

  app.use("/api/hackathones", router);


};
