/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('concurso_portafolio', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    posicion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_portafolio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'portafolio',
        key: 'id_portafolio'
      },
      unique: true
    },
    id_concurso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'concurso',
        key: 'id_concurso'
      },
      unique: true
    }
  }, {
    tableName: 'concurso_portafolio'
  });
};
