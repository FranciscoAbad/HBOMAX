export const validateName = (value: string): boolean => {
  return value !== "";
};

export const validEmail = (value: string): boolean => {
  if (
    !value
      .toLocaleLowerCase()
      .match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      )
  ) {
    return false;
  } else {
    return true;
  }
};

export const validatePhone = (phone: string): boolean => {
  let stripped = phone.replace(/[^0-9]/gi, "");

  return stripped.length === 10;
};

export const validatePassword = (password: string): boolean => {
  const digitOrSpecialCharRegex = /[\d!@#$%^&*(),.?":{}|<>]/;
  if (password.length < 8 || !digitOrSpecialCharRegex.test(password)) {
    return false;
  } else {
    return true;
  }
};

export const validateCreditCardNumber = (cardNumber: string): boolean => {
  const creditCardRegex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

  return creditCardRegex.test(cardNumber) && cardNumber.length === 16;
};
