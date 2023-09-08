const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex =
  /^(?:(?:\+?\d{1,3}[- ]?)?(?:\(\d{2,5}\)|\d{2,5})[- ]?)?(?:\d{1,4}[- ]?)?\d{1,10}$/;

// passwords must have at least 8 characters, one uppercase letter, one lowercase letter, and one number
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

export function validatePhoneOrEmail(str: string) {
  return emailRegex.test(str) || phoneRegex.test(str);
}

export function validatePassword(str: string) {
  return str.length >= 8 && passwordRegex.test(str);
}
