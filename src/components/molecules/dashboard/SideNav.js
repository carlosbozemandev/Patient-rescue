import { PictureFilled } from "@ant-design/icons";
import logo from "assets/images/baitussalam_logo.png";
import { Logo, Layout, SideMenu } from "components/atoms";
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
        <Logo image={logo} altText="Baitussalam Logo" additionalProps={{ className: "w-7/12" }} />
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
