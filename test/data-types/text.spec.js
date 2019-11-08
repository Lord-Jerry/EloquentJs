/* eslint-disable no-undef */
const DataTypes = require('../../src/dataTypes/index');
const CompactDataTypeError = require('../../src/errors/dataType');

test('should return sql CHAR data type', () => {
  expect(DataTypes.Char(54)).toBe('CHAR(54)');
});

test('should throw error when maximum number of character for CHAR data type has been exceeded', () => {
  expect(() => DataTypes.Char(666)).toThrow(CompactDataTypeError);
});

test('should throw error when Char method recieves parameter that is not a number', () => {
  expect(() => DataTypes.Char('65')).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char('true')).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char({})).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char([])).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char(Infinity)).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char(-Infinity)).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char(-67)).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char(12.87)).toThrow(CompactDataTypeError);
});
