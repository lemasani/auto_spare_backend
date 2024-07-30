'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Stocks', 'status', {
      type: Sequelize.ENUM('instock', 'outstock'),
      allowNull: false,
      defaultValue: 'instock'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Stocks', 'status');
  }
};