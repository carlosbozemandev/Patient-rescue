import { Footer } from "components/atoms";
import PropTypes from "prop-types";

const StickyFooter = ({ children }) => <Footer text={children} />;

StickyFooter.propTypes = {
  children: PropTypes.string.isRequired,
};

export default StickyFooter;
