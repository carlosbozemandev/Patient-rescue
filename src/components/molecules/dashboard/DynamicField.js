import { Picker, Select, Input, Col } from "components";
import { PropTypes } from "prop-types";

const DynamicField = ({ inputsData, span, xs, sm, lg }) => {
  const componentType = {
    Input,
    Picker,
    Select,
  };
  return inputsData.map((item) => {
    const GenericComponent = componentType[item?.componentType];
    return (
      <Col key={item?.id} span={span} xs={xs} sm={sm} lg={lg}>
        <GenericComponent
          label={item?.label}
          name={item?.name}
          validationRules={item?.rules}
          placeholder={item?.placeholder}
          type={item?.type}
          additionalProps={item?.additionalProps}
          {...item}
        />
      </Col>
    );
  });
};

DynamicField.defaultProps = {
  span: 24,
  xs: 24,
  sm: 24,
  lg: 24,
  inputsData: { componentType: "Input" },
};

DynamicField.propTypes = {
  inputsData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  span: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  lg: PropTypes.number,
};
export default DynamicField;
