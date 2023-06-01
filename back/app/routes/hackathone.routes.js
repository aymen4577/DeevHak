module.exports = app => {
  const hackathones = require("../controllers/hackathone.controller.js");

  var router = require("express").Router();
  const multer = require("multer");
  const path = require("path");

  var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, "./public/uploads/"); // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
      callBack(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

  var upload = multer({
    storage: storage,
  });
    // Create a new hackathon  haouino c bon? bhy 3ychek sofien yrhem wldik !! hya rabi m3akom 3ychek 
  router.post("/", upload.single("file"), hackathones.create);

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
