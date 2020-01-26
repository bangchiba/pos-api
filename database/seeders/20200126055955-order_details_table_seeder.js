'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order_details', [{
      order_id: 1,
      product_id: 1,
      quantity: 10,
      price: 40480
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order_details', null, {});

  }
};
