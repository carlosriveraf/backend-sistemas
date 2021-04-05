module.exports = (sequelize, Sequelize, DataTypes) => {
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
    return District;
};