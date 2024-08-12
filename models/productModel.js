const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    sku: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_out_of_stock: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    category_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Categories',
        key: 'id'
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, { foreignKey: 'category_id' });
    Product.hasMany(models.Transaction, { foreignKey: 'product_id' });
    Product.hasMany(models.StockMovement, { foreignKey: 'product_id' });
  };

  return Product;
};