// models/stockMovementModel.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const StockMovement = sequelize.define('StockMovement', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Products',
        key: 'id'
      }
    },
    movement_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movement_type: {
      type: DataTypes.ENUM('purchase', 'sale', 'return'),
      allowNull: false,
    },
    purchase_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    selling_price: {
      type: DataTypes.DECIMAL(10, 2),
    }
  });

  StockMovement.associate = (models) => {
    StockMovement.belongsTo(models.Product, { foreignKey: 'product_id' });
  };

  return StockMovement;
};