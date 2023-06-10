const db = require("../models/");
const User= db.user;

const nodemailer = require('nodemailer');
const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'aymenhmissi2@gmail.com',
    pass: 'ijvpekakcsscmuks',
  },
});
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving user with id=" + id });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};
exports.verfieremail = (req, res) => {
  const message = {
    from: 'aymenhmissi2@gmail.com',
    to: req.body.email,
    subject: 'Email Verfication',
    html: `
      <p> Verify your email address to complete registration and access your account </p>
      <p>Your Code Verification  ${req.body.code}</p>
      <p>Press ${req.body.lien} to proceed</p>
    `,
  };
  
  smtpTransport.sendMail(message, (error, response) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(200).send({ message: 'Email sent successfully!' });
    }
    smtpTransport.close();
  });
};
