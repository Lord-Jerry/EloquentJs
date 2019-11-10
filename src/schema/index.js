const _ = require('lodash');

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
      console.log(value.type(), key);
    });

    console.log(this.sql);
  }
}

module.exports = { Schema };
