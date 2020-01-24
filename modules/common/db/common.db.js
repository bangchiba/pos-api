const mysql = require('promise-mysql');

const config = require('@config').mysql;

class DBConnection {
  constructor() {
    this.connection = null;
    this.createConnection = this.createConnection.bind(this);
    this.closeConnection = this.closeConnection.bind(this);
  }

  async createConnection(database = 'default') {
    const configuration = {
      host: config.database[database].host,
      user: config.database[database].user,
      password: config.database[database].password,
      port: config.database[database].port,
      database: config.database[database].db,
    };

    try {
      const pool = await mysql.createPool(configuration);
      return pool;
    } catch (ex) {
      throw ex;
    }
  }

  async closeConnection(connection) {
    try {
      await connection.end();
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = DBConnection;