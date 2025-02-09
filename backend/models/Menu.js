// models/menu.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Menu = sequelize.define('Menu', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Menus',  // Upewnij się, że nazwa tabeli jest spójna (np. "Menus")
  timestamps: true
});

module.exports = Menu;
