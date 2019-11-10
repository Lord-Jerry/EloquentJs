const _ = require('lodash');
const logger = require('../utils/logger');

class Schema {
  constructor(tableName, options) {
    this.tableName = tableName;
    this.options = options;
    this.sql = '';

    if (typeof this.tableName !== 'string') {
      throw new Error('error');
    }
  }

  toSql() {
    this.sql += `CREATE TABLE IF NOT EXISTS ${this.tableName} (`;
    _.forEach(this.options, (value, key) => {
      logger(value.type(), key);
    });

    logger(this.sql);
  }
}

module.exports = { Schema };
