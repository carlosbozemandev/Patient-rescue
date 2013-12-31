import { Form, DatePicker as AntDatePicker, TimePicker as AntTimePicker } from "antd";
import { PropTypes } from "prop-types";

// Add more custom props as per need
const Picker = ({ name, validationRules, type, additionalProps, label }) => {
  const pickerType = {
    DateRangePicker: AntDatePicker.RangePicker,
    DatePicker: AntDatePicker,
    TimePicker: AntTimePicker,
    TimeRangePicker: AntTimePicker.RangePicker,
  };
  const GenericPicker = pickerType[type];
  return (
    <Form.Item name={name} rules={validationRules} label={label}>
      <GenericPicker className="w-full" {...additionalProps} />
    </Form.Item>
  );
};

Picker.defaultProps = {
  additionalProps: {},
  type: "DatePicker",
  validationRules: [{}],
  label: "",
};

Picker.propTypes = {
  additionalProps: PropTypes.shape({}),
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  validationRules: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func])),
  label: PropTypes.string,
};

export default Picker;
