'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sub_categories', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      category_id: Sequelize.INTEGER,
      name: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sub_categories');
  }
};
