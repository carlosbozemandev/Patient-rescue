import PropTypes from "prop-types";
import { Layout } from "antd";

const { Header: AntHeader } = Layout;

const Header = ({ children }) => (
  <AntHeader className="site-layout-background flex justify-between sideNav_header shadow-red-500/50 ">
    {children}
  </AntHeader>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
