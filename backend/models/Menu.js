const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Menu = sequelize.define('Menu', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: false, unique: true },
  link: { type: DataTypes.STRING, allowNull: false }, // <- 🛠️ Ta kolumna musi istnieć
  order: { type: DataTypes.INTEGER, defaultValue: 0 }
}, { timestamps: true });

module.exports = Menu;
