
module.exports = app => {
  const hackathones = require("../controllers/hackathone.controller.js");
const multer =require('multer');
  var router = require("express").Router();
  //multer configurations 
  const storage =multer.diskStorage({
destination:(req,file ,cb )=>{
  cb(null ,'./public/uplaods');

},
filename :(req ,file ,cb )=>{

  const fileName =`${Date.now()}_${file.originalname.replace(/\s+/g,'-')}`;
  cb(null,fileName);

}

  })
  const upload =multer({storage}).single('image');
 
    // Create a new hackathon  haouino c bon? bhy 3ychek sofien yrhem wldik !! hya rabi m3akom 3ychek 
  router.post("/", upload,hackathones.create);

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
