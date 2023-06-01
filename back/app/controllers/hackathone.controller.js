const db = require("../models");
const Hackathon = db.hackathones;

// Create and Save a new hackathon
exports.create = (req, res) => {
  console.log(req.file)
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a hackathon
   var imagsrc = "http://localhost:5000/uploads/" + req.file.filename 
   // il faut changer l'adresse localhost vers ip de cluster backend  une fois tu termine le dev 
  //  var imagsrc = "http://45.42.20.101:5000/upload/" + req.file.filename 

  const hackathon = new Hackathon({
    title: req.body.title,
    description: req.body.description,
    Rules :req.body.Rules,
    Date_début: req.body.Date_début,
    Date_fin :req.body.Date_fin,
    NomEntriprise: req.body.NomEntriprise,
    Numbre_Equipe : req.body.Numbre_Equipe,
    image: imagsrc,
    published: req.body.published ? req.body.published : false
  });

  // Save hackathon in the database
  hackathon
    .save(hackathon)
    .then(data => {
      res.send(data);
      console.log('ok req done')
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the hackathon."
      });
    });
};

// Retrieve all hackathons from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Hackathon.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hackathons."
      });
    });
};

// Find a single hackathon with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Hackathon.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found hackathon with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving hackathon with id=" + id });
    });
};

// Update a hackathon by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Hackathon.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update hackathon with id=${id}. Maybe hackathon was not found!`
        });
      } else res.send({ message: "hackathon was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating hackathon with id=" + id
      });
    });
};

// Delete a hackathon with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Hackathon.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete hackathon with id=${id}. Maybe hackathon was not found!`
        });
      } else {
        res.send({
          message: "hackathon was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete hackathon with id=" + id
      });
    });
};

// Delete all hackathons from the database.
exports.deleteAll = (req, res) => {
  Hackathon.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} hackathons were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all hackathons."
      });
    });
};

// Find all published hackathons
exports.findAllPublished = (req, res) => {
  Hackathon.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hackathons."
      });
    });
};
