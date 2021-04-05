const { Variable } = require('../models');

const ctrl = {};

ctrl.create = (req, res) => {
    const newVariable = {
        name: req.body.name,
        ecaStandar: req.body.ecaStandar,
    }

    Variable.create(newVariable)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Variable."
        });
    });
};

ctrl.findAll = (req, res) => {
    Variable.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving variables."
        });
    });
};

ctrl.findById = (req, res) => {
    const id = req.params.id;

    Variable.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Variable with id=" + id
        });
    });
};

ctrl.update = (req, res) => {
    const id = req.params.id;

    Variable.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Variable was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Variable with id=${id}. Maybe Variable was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Variable with id=" + id
        });
    });
};

ctrl.delete = (req, res) => {
    const id = req.params.id;

    Variable.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Variable was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Variable with id=${id}. Maybe Variable was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Variable with id=" + id
        });
    });
};

module.exports = ctrl;