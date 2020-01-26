const CustomerService = require('@customer/services')

class CustomerCotroller {
  constructor() {
    this.customerService = new CustomerService()
    this.index = this.index.bind(this)
  }

  async index (req, res) {
    const data = await this.customerService.index(req.query)

    res.send({ data })
  }
}

module.exports = CustomerCotroller