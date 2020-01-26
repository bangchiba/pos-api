const ProductModel = require("@product/models");

class ProductService {
  constructor() {
    this.productModel = new ProductModel();
  }

  async index() {
    const data = await this.productModel.index()

    return { data }
  }
}

module.exports = ProductService;