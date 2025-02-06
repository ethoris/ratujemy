const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Media = sequelize.define('Media', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fileName: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  size: { type: DataTypes.INTEGER, allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: true });

module.exports = Media;
