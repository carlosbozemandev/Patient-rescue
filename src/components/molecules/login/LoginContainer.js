import { Space, Logo } from "components/atoms";
import logo from "assets/images/baitussalam_logo.png";
import { PropTypes } from "prop-types";

const LoginContainer = ({ children }) => (
  <Space direction="vertical" className="lg:w-3/12 base:w-10/12">
    <div className="flex items-center	justify-center mb-5">
      <Logo image={logo} altText="Baitussalam Logo" additionalProps={{ className: "w-9/12" }} />
    </div>
    {children}
  </Space>
);

LoginContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginContainer;
