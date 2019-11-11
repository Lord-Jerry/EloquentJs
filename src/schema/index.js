const _ = require('lodash');

/**
 * @param { string } key - column name
 */
const generateColumnName = (key) => ` ${key}`;

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

  return `  ${type()}`;
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

/**
 * TODO: generate auto increment for other database servers
 * @param { object } options -
 * @param { string } key - column name
 * @returns { string}
 */
const generateAutoIncrement = (options, key) => {
  let { autoIncrement } = options;

  if (autoIncrement === undefined) autoIncrement = false;

  if (typeof autoIncrement !== 'boolean') {
    throw new TypeError(`Invalid Argument, Expected autoIncrement of ${key} to be a Boolean, But Got ${typeof type} Instead`);
  }

  return autoIncrement ? ' AUTO_INCREMENT' : '';
};

/**
 * @param { object } options
 * @param { string } key - column name
 */
const generatePrimaryKey = (options, key) => {
  let { primaryKey } = options;

  if (primaryKey === undefined) primaryKey = false;

  if (typeof primaryKey !== 'boolean') {
    throw new TypeError(`Invalid Argument, Expected primaryKey of ${key} to be a Boolean, But Got ${typeof type} Instead`);
  }

  return primaryKey ? ' PRIMARY KEY' : '';
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
      this.sql += generateColumnName(key);
      this.sql += generateTypes(value, key);
      this.sql += generateNull(value, key);
      this.sql += generatePrimaryKey(value, key);
      this.sql += generateAutoIncrement(value, key);
      this.sql += ',\n';
    });
    this.sql += '\n)';

    return this.sql;
  }
}

module.exports = Schema;
