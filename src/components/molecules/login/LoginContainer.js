import { Space, CustomIcon } from "components/atoms";
import { PropTypes } from "prop-types";

const LoginContainer = ({ children }) => (
  <Space direction="vertical" className="lg:w-3/12 base:w-10/12">
    <div className="flex items-center	justify-center mb-5">
      <CustomIcon
        name="MedicineBoxOutlined"
        additionalProps={{ style: { fontSize: "50px", color: "#fc653d" } }}
      />
    </div>
    {children}
  </Space>
);

LoginContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginContainer;
