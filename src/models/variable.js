module.exports = (sequelize, Sequelize, DataTypes) => {
    const Variable = sequelize.define('variables', {
      id: {
        type: DataTypes.STRING(8),
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      ecaStandar: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    }, {
        timestamps: false
    })
    return Variable;
}