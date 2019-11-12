/* eslint-disable no-undef */
const { DataTypes } = require('../../index');

// Test for DataTypes Integer Method
test('should return sql INTEGER type', () => {
  expect(DataTypes.Integer()).toBe('INTEGER');
});

// Test for DataTypes BigInt Method
test('should return sql BIGINT type', () => {
  expect(DataTypes.BigInt()).toBe('BIGINT');
});

// Test for DataTypes SmallInt Method
test('should return sql SMALLINT type', () => {
  expect(DataTypes.SmallInt()).toBe('SMALLINT');
});

// Test for DataTypes TinyInt Method
test('should return sql TINYINT type', () => {
  expect(DataTypes.TinyInt()).toBe('TINYINT');
});
