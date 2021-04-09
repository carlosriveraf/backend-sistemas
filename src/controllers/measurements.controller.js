import { Measurement } from '../models';

export const createMeasurement = async (req, res) => {
    try {
        const { zoneId, variableId, ecaValue } = req.body;
        const MeasurementSaved = await Measurement.create({ zoneId, variableId, ecaValue });
        res.status(201).json(MeasurementSaved);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || 'Some error occurred while creating the Measurement'
        });
    }
};

export const getMeasurements = async (req, res) => {
    try {
        const measurements = await Measurement.findAll();
        res.status(200).json(measurements);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || 'Some error occurred while retrieving measurements'
        });
    }
};

export const getMeasurementById = async (req, res) => {
    try {
        const { id } = req.params;
        const measurement = await Measurement.findByPk(id);
        res.status(200).json(measurement);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error retrieving Measurement with id=${id}`
        });
    }
};

export const updateMeasurementById = async (req, res) => {
    try {
        const { id } = req.params;
        const measurementUpdated = await Measurement.update(req.body, {
            where: { id }
        });
        if (measurementUpdated == 1) {
            const measurement = await Measurement.findByPk(id);
            res.status(200).json(measurement);
        } else {
            res.status(500).json({
                message: `Cannot update Measurement with id=${id}. Maybe Measurement was not found, req.body is empty or may be the same!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error updating Measurement with id=${id}`
        });
    }
};

export const deleteMeasurementById = async (req, res) => {
    try {
        const { id } = req.params;
        const measurementDeleted = await Measurement.destroy({
            where: { id }
        });
        if (measurementDeleted == 1) {
            res.status(204).json();
        } else {
            res.status(500).json({
                message: `Cannot delete Measurement with id=${id}. Maybe Measurement was not found!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Could not delete Measurement with id=${id}`
        });
    }
};