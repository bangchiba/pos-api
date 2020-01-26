'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_prices', [
      {
        product_id: 1,
        min: 3,
        max: 5,
        price: 44000,
      },
      {
        product_id: 1,
        min: 6,
        max: 11,
        price: 35200,
      },
      {
        product_id: 1,
        min: 12,
        max: 0,
        price: 35200,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_prices', null, {});
  }
};
