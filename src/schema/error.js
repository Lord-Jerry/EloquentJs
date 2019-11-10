class CompactSchemaError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CompactSchemaError';
  }
}

module.exports = CompactSchemaError;
