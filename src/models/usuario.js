module.exports = (sequelize, Sequelize, DataTypes) => {
  const Usuario = sequelize.define('usuario', {
    id_usuario: {
      type: DataTypes.BIGINT(8),
      primaryKey: true
    },
    usuario: {
      type: Sequelize.STRING(30)
    },
    clave: {
      type: Sequelize.STRING(30)
    },
    correo: {
      type: Sequelize.STRING(100)
    }
  }, {
    tableName: 'usuario'
  })
  return Usuario;
}