module.exports = class OutOfBoundsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OutOfBoundsError';
  }
};

module.exports = class InvalidInputError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidInputError';
  }
};

module.exports = class TakenFieldError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TakenFieldError';
  }
};
