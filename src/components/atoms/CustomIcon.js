import PropTypes from "prop-types";
import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
  PullRequestOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";

const CustomIcon = ({ name, classname, additionalProps }) => {
  const IconType = {
    DeleteOutlined,
    EditOutlined,
    UserAddOutlined,
    PullRequestOutlined,
    MedicineBoxOutlined,
  };
  const GenericComponent = IconType[name];
  return <GenericComponent className={classname} {...additionalProps} />;
};

CustomIcon.defaultProps = {
  name: "EditOutlined",
  classname: "",
  additionalProps: {},
};

CustomIcon.propTypes = {
  name: PropTypes.string,
  classname: PropTypes.string,
  additionalProps: PropTypes.shape({}),
};

export default CustomIcon;
