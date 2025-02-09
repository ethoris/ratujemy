const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Page = sequelize.define('Page', {
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
  content: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  status: { 
    type: DataTypes.ENUM('draft', 'published'), 
    defaultValue: 'draft' 
  }
}, { 
  tableName: 'Pages', 
  timestamps: true 
});

module.exports = Page;
