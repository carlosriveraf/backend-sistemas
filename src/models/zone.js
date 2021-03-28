module.exports = (sequelize, Sequelize, DataTypes) => {
    const Zone = sequelize.define('zones', {
      id: {
        type: DataTypes.STRING(8),
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
    }, {
        timestamps: false
    })
    return Zone;
}