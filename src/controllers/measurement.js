const db = require("../models")
const { Measurement } = db
const { Op } = db.Sequelize
const ctrl = {}

ctrl.create = (req, res) => {
    const newMeasurement = {
        zoneId: req.body.zoneId,
        variableId: req.body.variableId,
        ecaValue: req.body.ecaValue
    }

    Measurement.create(newMeasurement)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Measurement."
        })
    })
}

ctrl.findAll = (req, res) => {
    Measurement.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving measurements."
        })
    })
}

ctrl.findById = (req, res) => {
    const id = req.params.id

    Measurement.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Measurement with id=" + id
        })
    })
}

ctrl.update = (req, res) => {
    const id = req.params.id

    Measurement.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Measurement was updated successfully."
            })
        } else {
            res.send({
                message: `Cannot update Measurement with id=${id}. Maybe Measurement was not found or req.body is empty!`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Measurement with id=" + id
        })
    })
}

ctrl.delete = (req, res) => {
    const id = req.params.id

    Measurement.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Measurement was deleted successfully!"
            })
        } else {
            res.send({
                message: `Cannot delete Measurement with id=${id}. Maybe Measurement was not found!`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Measurement with id=" + id
        })
    })
}

module.exports = ctrl