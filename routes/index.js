const CustomerController = require('@customer/controllers')

module.exports = app => {
  const customerController = new CustomerController()
  
  app.route("/").get((req, res) => {
    res.send('Hello World');
  });

  app.route('/customer').get(customerController.index)
}
