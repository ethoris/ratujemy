// models/HomepageVersion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const HomepageVersion = sequelize.define('HomepageVersion', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  homepageId: { type: DataTypes.INTEGER, allowNull: false },
  heroTitle: { type: DataTypes.STRING, allowNull: false },
  heroSubtitle: { type: DataTypes.TEXT, allowNull: true },
  heroBackground: { type: DataTypes.STRING, allowNull: true },
  mainContent: { type: DataTypes.TEXT, allowNull: true },
  fontFamily: { type: DataTypes.STRING, allowNull: true },
  fontSize: { type: DataTypes.STRING, allowNull: true },
  textColor: { type: DataTypes.STRING, allowNull: true }
}, {
  tableName: 'HomepageVersions',
  timestamps: true
});

module.exports = HomepageVersion;
