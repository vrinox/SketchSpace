/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('concurso', {
    id_concurso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    precio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiempo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'usuario',
          key: 'id_usuario'
        },
        unique: true
      }
  }, {
    tableName: 'concurso'
  });
};
