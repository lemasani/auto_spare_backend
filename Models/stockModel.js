const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Config/database'); // Adjust the path as necessary

const Stock = sequelize.define('Stock', {
  name: {
	type: DataTypes.STRING,
	allowNull: false,
  unique: true
  },
  quantity: {
	type: DataTypes.INTEGER,
	allowNull: false,
  },
  actualPrice: {
	type: DataTypes.FLOAT,
	allowNull: false,
  },
  sellingPrice: {
	type: DataTypes.FLOAT,
	allowNull: false,
  },
  imageUrl: {
	type: DataTypes.STRING,
	allowNull: true,
  },
}, {
  tableName: 'Stocks',
  timestamps: true,
});

module.exports = Stock;