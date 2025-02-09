// backend/models/Seo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Seo = sequelize.define('Seo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pageId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT, // lub STRING – ważne, by w migracji było to samo
    allowNull: true
  },
  keywords: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'Seo',
  timestamps: true
});

module.exports = Seo;
