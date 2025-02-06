const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Seo = sequelize.define('Seo', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  pageID: { type: DataTypes.STRING, allowNull: false, unique: true }, // ✅ Poprawiona kolumna
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  keywords: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, { timestamps: true });

module.exports = Seo;
