import { Form, Select as AntSelect } from "antd";
import { PropTypes } from "prop-types";

// Add more custom props as per need
const Select = ({
  name,
  placeholder,
  validationRules,
  label,
  optionList,
  valueKey,
  optionKey,
  uniqueKey,
  loading,
  additionalProps,
}) => (
  <Form.Item label={label} name={name} rules={validationRules}>
    <AntSelect placeholder={placeholder} loading={loading} {...additionalProps}>
      {optionList?.length > 0 &&
        optionList?.map((item) => (
          <AntSelect.Option key={item[uniqueKey]} value={item[valueKey]}>
            {item[optionKey]}
          </AntSelect.Option>
        ))}
    </AntSelect>
  </Form.Item>
);

Select.defaultProps = {
  placeholder: "no text",
  additionalProps: {},
  validationRules: [{}],
  label: "",
  valueKey: "id",
  optionKey: "name",
  uniqueKey: "code",
  optionList: [{}],
  loading: false,
};

Select.propTypes = {
  placeholder: PropTypes.string,
  additionalProps: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  validationRules: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func])),
  label: PropTypes.string,
  valueKey: PropTypes.string,
  optionKey: PropTypes.string,
  uniqueKey: PropTypes.string,
  optionList: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
};

export default Select;
