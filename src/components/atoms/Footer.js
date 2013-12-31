import { Layout } from "antd";
import PropTypes from "prop-types";

const { Footer: AntFooter } = Layout;

const Footer = ({ text }) => <AntFooter className="text-center">{text}</AntFooter>;

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
