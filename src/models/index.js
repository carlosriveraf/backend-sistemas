const { Sequelize, DataTypes } = require("sequelize")
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require("./user")(sequelize, Sequelize, DataTypes)
db.District = require("./district")(sequelize, Sequelize, DataTypes)
db.Zone = require("./zone")(sequelize, Sequelize, DataTypes)
db.Variable = require("./variable")(sequelize, Sequelize, DataTypes)
db.Measurement = require("./measurement")(sequelize, Sequelize, DataTypes)

// Asociaciones
db.User.belongsTo(db.District, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
db.Zone.belongsTo(db.District, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
db.Measurement.belongsTo(db.Zone, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
db.Measurement.belongsTo(db.Variable, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })

module.exports = db