module.exports = (sequelize, Sequelize, DataTypes) => {
    const Measurement = sequelize.define('measurements', {
      zoneId: {
        type: DataTypes.STRING(8),
        primaryKey: true
      },
      variableId: {
        type: Sequelize.STRING(100),
        primaryKey: true
      },
      eca_value: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    })
    return Measurement;
}