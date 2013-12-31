import PropTypes from "prop-types";
import { Menu as AntMenu } from "antd";
import React from "react";

const SideMenu = ({ menuItems, icon, setSelectedRoute, selectedRoute, navigate }) => (
  <AntMenu
    className="large_text"
    theme="light"
    mode="inline"
    inlineIndent={44}
    width={400}
    defaultSelectedKeys={`${selectedRoute}`}
  >
    {menuItems?.map((item, index) => (
      <React.Fragment key={`menuitem-${index + 1}`}>
        {!Array.isArray(item?.children) && (
          <AntMenu.Item
            key={item?.key}
            icon={icon}
            className="menuItem_height"
            onClick={() => {
              navigate(`${item?.route}`);
              setSelectedRoute(item?.key);
            }}
          >
            <span className="label disableTextSelect">{item?.label}</span>
          </AntMenu.Item>
        )}
        {Array.isArray(item?.children) && (
          <AntMenu.SubMenu
            key={item?.key}
            icon={icon}
            title={<span className="label disableTextSelect">{item?.label}</span>}
          >
            {item?.children?.map((subItem) => (
              <AntMenu.Item
                key={subItem?.key}
                icon={icon}
                className="menuItem_height"
                onClick={() => {
                  navigate(`${subItem?.route}`);
                  setSelectedRoute(subItem?.key);
                }}
              >
                <span className="label disableTextSelect">{subItem?.label}</span>
              </AntMenu.Item>
            ))}
          </AntMenu.SubMenu>
        )}
      </React.Fragment>
    ))}
  </AntMenu>
);

SideMenu.defaultProps = {
  menuItems: [],
  navigate: () => {},
};

SideMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({})),
  icon: PropTypes.node.isRequired,
  setSelectedRoute: PropTypes.func.isRequired,
  selectedRoute: PropTypes.number.isRequired,
  navigate: PropTypes.func,
};

export default SideMenu;
