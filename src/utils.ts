export function validatePhoneOrEmail(str: string) {
  const regex = /^(?:(?:\+?\d{1,3}[- ]?)?(?:\(\d{2,5}\)|\d{2,5})[- ]?)?(?:\d{1,4}[- ]?)?\d{1,10}$|^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return regex.test(str);
}

export function validatePassword(str: string) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  return regex.test(str);
}
