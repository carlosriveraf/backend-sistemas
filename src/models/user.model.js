import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database';
import District from './district.model';

const User = sequelize.define('users', {
    id: {
        type: DataTypes.STRING(8),
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
});

User.belongsTo(District, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

export default User;