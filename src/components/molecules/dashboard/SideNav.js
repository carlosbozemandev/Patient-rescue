import { PictureFilled } from "@ant-design/icons";
import { CustomIcon, Layout, SideMenu } from "components/atoms";
import { useState } from "react";
import menuItems from "__fixtures__/menu-items";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SideNav = ({ isCollapsed }) => {
  const [selectedRoute, setSelectedRoute] = useState(1);
  const navigate = useNavigate();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={isCollapsed}
      width={300}
      theme="light"
      className="sideNav_sider"
    >
      <div className="logo">
        <CustomIcon
          name="MedicineBoxOutlined"
          additionalProps={{ style: { fontSize: "50px", color: "#fc653d" } }}
        />{" "}
      </div>
      <SideMenu
        navigate={navigate}
        menuItems={menuItems}
        icon={<PictureFilled />}
        setSelectedRoute={setSelectedRoute}
        selectedRoute={selectedRoute}
      />
    </Sider>
  );
};
SideNav.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};

export default SideNav;
