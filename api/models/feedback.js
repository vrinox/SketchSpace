/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feedback', {
    id_feedback: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_concurso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'concurso',
        key: 'id_concurso'
      },
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'feedback'
  });
};
