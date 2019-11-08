/* eslint-disable no-undef */
const DataTypes = require('../../src/dataTypes/index');
const CompactDataTypeError = require('../../src/dataTypes/error');

// Test for DataTypes Char method
test('should return sql CHAR type', () => {
  expect(DataTypes.Char(54)).toBe('CHAR(54)');
  expect(DataTypes.Char()).toBe('CHAR(255)');
});

test('should throw error, when maximum length of characters for CHAR data type has been exceeded', () => {
  expect(() => DataTypes.Char(256)).toThrow(CompactDataTypeError);
});

test('should throw error when Char method recieves argument that is not a number', () => {
  expect(() => DataTypes.Char('65')).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char('true')).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char({})).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char([])).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char(Infinity)).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char(-Infinity)).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char(-67)).toThrow(CompactDataTypeError);
  expect(() => DataTypes.Char(12.87)).toThrow(CompactDataTypeError);
});

// Test for DataTypes Varchar Method
test('should return sql VARCHAR type', () => {
  expect(DataTypes.VarChar(54)).toBe('VARCHAR(54)');
  expect(DataTypes.VarChar()).toBe('VARCHAR(255)');
});

test('should throw error, when maximum length of characters for VARCHAR data type has been exceeded', () => {
  expect(() => DataTypes.VarChar(256)).toThrow(CompactDataTypeError);
});

test('should throw error when VarChar method recieves argument that is not a number', () => {
  expect(() => DataTypes.VarChar('65')).toThrow(CompactDataTypeError);
  expect(() => DataTypes.VarChar('true')).toThrow(CompactDataTypeError);
  expect(() => DataTypes.VarChar({})).toThrow(CompactDataTypeError);
  expect(() => DataTypes.VarChar([])).toThrow(CompactDataTypeError);
  expect(() => DataTypes.VarChar(Infinity)).toThrow(CompactDataTypeError);
  expect(() => DataTypes.VarChar(-Infinity)).toThrow(CompactDataTypeError);
  expect(() => DataTypes.VarChar(-67)).toThrow(CompactDataTypeError);
  expect(() => DataTypes.VarChar(12.87)).toThrow(CompactDataTypeError);
});

// Test for DataTypes TinyText Method
test('should return sql TINYTEXT type', () => {
  expect(DataTypes.TinyText()).toBe('TINYTEXT');
});

// Test for DataTypes Text Method
test('should return sql TEXT type', () => {
  expect(DataTypes.Text()).toBe('TEXT');
});

// Test for DataTypes Blob Method
test('should return sql BLOB type', () => {
  expect(DataTypes.Blob()).toBe('BLOB');
});

// Test for DataTypes MediumText Method
test('should return sql MEDIUMTEXT type', () => {
  expect(DataTypes.MeduimText()).toBe('MEDIUMTEXT');
});

// Test for DataTypes MediumBlob Method
test('should return sql MEDIUMBLOB type', () => {
  expect(DataTypes.MediumBlob()).toBe('MEDIUMBLOB');
});

// Test for DataTypes LongText Method
test('should return sql LONGTEXT type', () => {
  expect(DataTypes.LongText()).toBe('LONGTEXT');
});

// Test for DataTypes LongBlob Method
test('should return sql LONGBLOB type', () => {
  expect(DataTypes.LongBlob()).toBe('LONGBLOB');
});
