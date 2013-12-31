import { Form, Input as AntInput, InputNumber } from "antd";
import { PropTypes } from "prop-types";

// Add more custom props as per need
const Input = ({ name, placeholder, validationRules, type, additionalProps, label }) => {
  const inputType = {
    Password: AntInput.Password,
    Text: AntInput,
    Number: InputNumber,
    TextArea: AntInput.TextArea,
  };
  const GenericInput = inputType[type];
  return (
    <Form.Item name={name} rules={validationRules} label={label}>
      <GenericInput placeholder={placeholder} {...additionalProps} />
    </Form.Item>
  );
};

Input.defaultProps = {
  placeholder: "no text",
  additionalProps: {},
  type: "Text",
  validationRules: [{}],
  label: "",
};

Input.propTypes = {
  placeholder: PropTypes.string,
  additionalProps: PropTypes.shape({}),
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  validationRules: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func])),
  label: PropTypes.string,
};

export default Input;
