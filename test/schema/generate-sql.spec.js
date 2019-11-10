/* eslint-disable no-undef */
const { Schema, DataTypes } = require('../../index');
const SchemaErrror = require('../../src/schema/error');

test('should throw error if first argument passed to schema is not a valid string', () => {
  expect(() => {
    const types = [1, true, {}, 1.0, Infinity, -Infinity, []];
    // eslint-disable-next-line no-restricted-syntax
    for (const t of types) {
      // eslint-disable-next-line no-unused-vars
      const person = new Schema(t, {
        name: {
          type: 'TEXT',
        },
      });
    }
  }).toThrow(SchemaErrror);
});

test('should throw error if type is not a function', () => {
  expect(() => {
    const types = [1, true, {}, 1.0, Infinity, -Infinity, [], 'TEXT'];
    // eslint-disable-next-line no-restricted-syntax
    for (const t of types) {
      // eslint-disable-next-line no-unused-vars
      const person = new Schema('test', {
        name: {
          type: t,
        },
      }).toSql();
    }
  }).toThrow(SchemaErrror);
});
