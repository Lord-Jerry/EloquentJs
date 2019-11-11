const _ = require('lodash');
const logger = require('../utils/logger');

/**
 * generate SQL type from provided options
 * @param { object } options -
 * @param { string} key - column name
 * @returns { string || TypeError }
 */
const generateTypes = (options, key) => {
  const { type } = options;

  if (typeof type !== 'function') {
    throw new TypeError(`Invalid Argument, Expected type of ${key} to be a Function But Got ${typeof type} Instead`);
  }

  return `  ${key}  ${type()}`;
};

/**
 * @param { object } options -
 * @param { string } - key
 * @returns { string }
 */
const generateNull = (options, key) => {
  let { allowNull } = options;

  if (allowNull === undefined) allowNull = true;

  if (typeof allowNull !== 'boolean') {
    throw new TypeError(`Invalid Argument, Expected allowNull of ${key} to be a Boolean, But Got ${typeof type} Instead`);
  }

  return allowNull ? ' NULL' : ' NOT NULL';
};

class Schema {
  constructor(tableName, options) {
    if (typeof tableName !== 'string') {
      throw new TypeError('error');
    }

    this.tableName = tableName.toLowerCase();
    this.options = options;
    this.sql = '';
  }

  toSql() {
    this.sql += `CREATE TABLE IF NOT EXISTS ${this.tableName} ( \n`;
    _.forEach(this.options, (value, key) => {
      this.sql += generateTypes(value, key);
      this.sql += generateNull(value, key);
      this.sql += ',\n';
    });
    this.sql += '\n)';

    logger(this.sql);
  }
}

module.exports = Schema;
