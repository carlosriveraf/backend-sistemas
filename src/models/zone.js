module.exports = (sequelize, Sequelize, DataTypes) => {
    const Zone = sequelize.define('zones', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        coordX: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        coordY: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return Zone;
};