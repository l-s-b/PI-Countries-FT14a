const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    alpha3Code: { type: DataTypes.STRING, allowNull: false, unique: true, primaryKey: true, },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    flag: { type: DataTypes.STRING, allowNull: false, unique: true },
    region: {
      type: DataTypes.ENUM,
      values: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar'],
      allowNull: false,
    },
    subregion: { type: DataTypes.STRING },
    capital: { type: DataTypes.STRING, allowNull: false },
    area: { type: DataTypes.FLOAT, },
    population: { type: DataTypes.INTEGER }
  });
};
