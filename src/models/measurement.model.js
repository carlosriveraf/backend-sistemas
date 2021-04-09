import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database';
import Variable from './variable.model';
import Zone from './zone.model';

const Measurement = sequelize.define('measurements', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    zoneId: {
        type: DataTypes.BIGINT,
    },
    variableId: {
        type: Sequelize.DataTypes.BIGINT,
    },
    ecaValue: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

Measurement.belongsTo(Zone, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Measurement.belongsTo(Variable, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

export default Measurement;