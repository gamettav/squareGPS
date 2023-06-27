// Custom error classes

export class CustomError extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  getErrorMessage() {
    return "Something went wrong: " + this.message;
  }
}

// Error messages

export const unableToGeocodeMsg = "Unable to geocode";
export const serverErrorMsg = "Server error";

// Errors

export const unableToGeocodeError = new CustomError(unableToGeocodeMsg);
export const serverError = new CustomError(serverErrorMsg);
