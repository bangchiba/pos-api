const ProductService = require('@product/services');

class ProductController {
  constructor () {
    this.productService = new ProductService();
    this.index = this.index.bind(this);
  }

  async index(req, res) {
    const result = await this.productService.index(req.query);

    res.send({ result });
  }
}

module.exports = ProductController;
