const { Zone } = require('../models');

const ctrl = {};

ctrl.create = (req, res) => {
    const newZone = {
        name: req.body.name,
        coordX: req.body.coordX,
        coordY: req.body.coordY,
        districtId: req.body.districtId
    }

    Zone.create(newZone)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Zone."
        });
    });
};

ctrl.findAll = (req, res) => {
    Zone.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving zones."
        });
    });
};

ctrl.findById = (req, res) => {
    const id = req.params.id;

    Zone.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Zone with id=" + id
        });
    });
};

ctrl.update = (req, res) => {
    const id = req.params.id;

    Zone.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Zone was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Zone with id=${id}. Maybe Zone was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Zone with id=" + id
        });
    });
};

ctrl.delete = (req, res) => {
    const id = req.params.id;

    Zone.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Zone was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Zone with id=${id}. Maybe Zone was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Zone with id=" + id
        });
    });
};

module.exports = ctrl;