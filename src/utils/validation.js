import { UI_VALIDATION } from "constants";

const numberValidation = () => ({
  validator(rule, value) {
    const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

    if (!value) {
      return Promise.resolve();
    }
    if (!re.test(value)) {
      return Promise.reject(new Error(UI_VALIDATION.types.number));
    }
    return Promise.resolve();
  },
});

export default numberValidation;
