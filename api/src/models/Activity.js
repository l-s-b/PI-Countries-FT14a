const { DataTypes } = require('sequelize');

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
      values: [1, 2, 3, 4, 5],
      allowNull: false,
    },
    estimated_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM,
      values: ['Summer', 'Fall', 'Winter', 'Spring', 'All'],
      allowNull: false,
    },
  });
};
