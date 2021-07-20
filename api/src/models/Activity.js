const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

  sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: ['🥵⚫⚫⚫⚫', '🥵🥵⚫⚫⚫', '🥵🥵🥵⚫⚫', '🥵🥵🥵🥵⚫', '🥵🥵🥵🥵🥵'],
      allowNull: false,
    },
    estimated_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM,
      values: ['Summer', 'Fall', 'Winter', 'Spring', 'All seasons'],
      allowNull: false,
    },
  });
};
