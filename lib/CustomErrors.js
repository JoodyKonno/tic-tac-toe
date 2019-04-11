class ApplicationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = class OutOfBoundsError extends ApplicationError {};

module.exports = class InvalidInputError extends ApplicationError {};

module.exports = class TakenFieldError extends ApplicationError {};

module.exports = class PlayerWithSameInputError extends ApplicationError {};
