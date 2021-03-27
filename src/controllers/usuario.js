const db = require("../models");
const { Usuario } = db;
const { Op } = db.Sequelize;


const ctrl = {}


// Retrieve all Tutorials from the database.
ctrl.findAll = (req, res) => {
    Usuario.findAll()
      .then(data => {
          console.log(data)
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


module.exports = ctrl