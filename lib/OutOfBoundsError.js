module.exports = class OutOfBoundsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OutOfBoundsError';
  }
};
