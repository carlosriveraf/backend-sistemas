module.exports = (sequelize, Sequelize, DataTypes) => {
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
            type: Sequelize.STRING(30),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
    })
    return User
}