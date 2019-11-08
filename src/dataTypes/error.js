class CompactDataTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CompactDataTypeError';
  }
}

module.exports = CompactDataTypeError;
