import { Form, Radio as AntRadio } from "antd";
import { PropTypes } from "prop-types";

// Add more custom props as per need
const Radio = ({ name, validationRules, label }) => (
  <Form.Item name={name} label={label} rules={validationRules}>
    <AntRadio.Group>
      <AntRadio.Button value>Active</AntRadio.Button>
      <AntRadio.Button value={false}>In Active</AntRadio.Button>
    </AntRadio.Group>
  </Form.Item>
);

Radio.defaultProps = {
  additionalProps: {},
  validationRules: [{}],
  label: "",
};

Radio.propTypes = {
  additionalProps: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  validationRules: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func])),
  label: PropTypes.string,
};

export default Radio;
