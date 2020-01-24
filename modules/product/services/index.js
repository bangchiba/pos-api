const ProductModel = require("@product/models");

class ProductService {
  constructor() {
    this.productModel = new ProductModel();
    this.schema = {};
  }

  async index(query) {
    return {}
  }
}

module.exports = ProductService;