import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database';

const District = sequelize.define('districts', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
}, {
    timestamps: false
});

export default District;