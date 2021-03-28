module.exports = (sequelize, Sequelize, DataTypes) => {
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
    })
    return Measurement
}