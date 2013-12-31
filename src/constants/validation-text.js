/* eslint-disable no-template-curly-in-string */
const UI_VALIDATION = {
  required: "${label} is required!",
  types: {
    email: "Enter a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}!",
  },
  string: {
    max: "Cannot be longer then ${max} characters!",
    min: "Cannot be less then ${min} characters!",
  },
  noLabelRequire: "This field is required!",
};

export default UI_VALIDATION;
