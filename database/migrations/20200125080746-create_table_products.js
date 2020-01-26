'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      sub_categori_id: Sequelize.INTEGER
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};
