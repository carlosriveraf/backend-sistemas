const { District } = require('../models');

const ctrl = {};

ctrl.create = (req, res) => {
    const newDistrict = {
        id: req.body.id,
        name: req.body.name,
    };

    District.create(newDistrict)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the District."
        });
    });
};
  
ctrl.findAll = (req, res) => {
    District.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving districts."
        });
    });
};

ctrl.findById = (req, res) => {
    const id = req.params.id;
    
    District.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving District with id=" + id
        });
    });
};

ctrl.update = (req, res) => {
    const id = req.params.id;

    District.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "District was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update District with id=${id}. Maybe District was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating District with id=" + id
        });
    });
};


ctrl.delete = (req, res) => {
    const id = req.params.id;
  
    District.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "District was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete District with id=${id}. Maybe District was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete District with id=" + id
        });
    });
};

module.exports = ctrl;