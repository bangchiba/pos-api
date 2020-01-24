const DBService = require('@common/services/db.common.service.js');

class ProductModel {
  constructor() {
    this.table = 'product';
    this.dbService = new DBService;
  }

  async index () {

    const query = `SELECT * FROM ${this.table}`;
    
    return await this.dbService.query(query);
  }
}

module.exports = ProductModel;