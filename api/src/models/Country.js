const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

  const Country = sequelize.define('country', {
    alpha3Code: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    flag: { type: DataTypes.STRING, //chequear el tipo de dato
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING, //MODIFICAR el tipo de dato. Sólo uno de 6 continentes:
      // (Europa, América, Asia, África, Oceanía, Antártida)
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING, //MODIFICAR el tipo de dato. Una de varias subregiones
    },
    capital: { type: DataTypes.STRING, allowNull: false },
    area: { type: DataTypes.FLOAT, },
    population: { type: DataTypes.INTEGER, },
    altspelling: { type: DataTypes.STRING, },
  });

  module.exports = Country;

};
