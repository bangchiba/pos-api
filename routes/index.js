const CustomerController = require('@customer/controllers')
const ProductController = require('@product/controllers')

module.exports = app => {
  const customerController = new CustomerController()
  const productController = new ProductController()
  
  app.route("/").get((req, res) => {
    res.send('Hello World');
  });

  app.route('/customer').get(customerController.index)
  app.route('/product').get(productController.index)
}
