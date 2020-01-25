'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_prices', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      min: Sequelize.INTEGER,
      max: Sequelize.INTEGER,
      price: Sequelize.FLOAT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_prices');
  }
};
