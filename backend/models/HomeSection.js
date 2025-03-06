const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const HomeSection = sequelize.define('HomeSection', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // Typ sekcji – na przykład 'about' dla sekcji "O nas / misja i wartości"
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'about'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'HomeSections',
  timestamps: true
});

module.exports = HomeSection;
