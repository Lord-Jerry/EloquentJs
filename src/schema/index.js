const _ = require('lodash');
const logger = require('../utils/logger');

const generateTypes = (options, key) => {
  const { type } = options;

  if (typeof type !== 'function') {
    throw new TypeError(`Invalid Argument, Expected type of ${key} to be a Function But Got ${typeof type} Instead`);
  }

  return `  ${key}  ${type()}`;
};
class Schema {
  constructor(tableName, options) {
    this.tableName = tableName;
    this.options = options;
    this.sql = '';

    if (typeof this.tableName !== 'string') {
      throw new TypeError('error');
    }
  }

  toSql() {
    this.sql += `CREATE TABLE IF NOT EXISTS ${this.tableName} ( \n`;
    _.forEach(this.options, (value, key) => {
      this.sql += generateTypes(value, key);
      this.sql += ',\n';
    });
    this.sql += '\n)';

    logger(this.sql);
  }
}

module.exports = Schema;
