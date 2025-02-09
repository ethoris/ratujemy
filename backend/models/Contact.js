const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Contact = sequelize.define('Contact', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  firstName: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  lastName: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  phone: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  email: { 
    type: DataTypes.STRING, 
    allowNull: true  // opcjonalne, bo klient może nie podać
  },
  situationDescription: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  deviceType: { 
    type: DataTypes.ENUM('Pendrive/Karta Flash', 'Dysk HDD/SSD', 'Telefon', 'Tablet'),
    allowNull: false 
  }
}, {
  tableName: 'Contacts',
  timestamps: true
});

module.exports = Contact;
