import { Button as AntButton } from "antd";
import { PropTypes } from "prop-types";

const Button = ({ onClick, text, type, isLoading, additionalProps }) => (
  <AntButton type={type} onClick={onClick} loading={isLoading} {...additionalProps}>
    {text}
  </AntButton>
);
Button.defaultProps = {
  onClick: () => {},
  text: "no text",
  type: "primary",
  isLoading: false,
  additionalProps: {},
};
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  additionalProps: PropTypes.shape({}),
};
export default Button;
