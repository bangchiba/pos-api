const CustomerModel = require('@customer/models')

class CustomerService {
  constructor() {
    this.customerModel = new CustomerModel()
  }

  async index () {
    const data = await this.customerModel.index()

    return { data }
  }
}

module.exports = CustomerService