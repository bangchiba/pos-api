require('module-alias/register');

const DBConnection = require('@common/db/common.db.js');

class DBCommonService {
  constructor(db = 'default') {
    this.db = db;
    this.dbConnection = new DBConnection();
  }

  async query(query, data = []) {

    try {
      const connection = await this.dbConnection.createConnection(this.db);
      try {
        const result = await connection.query(query, data);

        await this.dbConnection.closeConnection(connection);

        return result;
      } catch (ex) {
        await this.dbConnection.closeConnection(connection);

        return { errorCode: ex.code };
      }
    } catch (ex) {
      return { errorCode: ex.code };
    }
  }
}

module.exports = DBCommonService;
