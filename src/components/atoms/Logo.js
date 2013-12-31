import PropTypes from "prop-types";

const Logo = ({ image, additionalProps, altText }) => (
  <img src={image} alt={altText} {...additionalProps} />
);

Logo.defaultProps = {
  additionalProps: {},
};
Logo.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  additionalProps: PropTypes.shape({}),
};

export default Logo;
