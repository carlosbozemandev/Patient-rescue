/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Header, Dropdown, Menu, Space } from "components/atoms";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "redux/reducers";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SmileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { ROUTES, UI_TEXT } from "constants";
import { useSessionStorage } from "hooks";

const HeaderTop = ({ isCollapsed, setCollapsed }) => {
  const { clear } = useSessionStorage();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(userLogout());
    clear();
    navigate(ROUTES.ADMIN);
  };

  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          {UI_TEXT.CTA.PROFILE}
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "2",
      danger: true,
      label: (
        <span tabIndex={-1} role="link" onClick={onLogout}>
          {UI_TEXT.CTA.LOGOUT}
        </span>
      ),
      icon: <LogoutOutlined />,
    },
  ];

  const toggleCollapsed = () => {
    setCollapsed(!isCollapsed);
    localStorage.setItem("isCollapse", isCollapsed);
  };
  const checkCollapsed = localStorage.getItem("isCollapse");

  useEffect(() => {
    if (checkCollapsed === "true") {
      setCollapsed(false);
    } else if (checkCollapsed === "false") {
      setCollapsed(true);
    }
  }, []);

  return (
    <Header>
      <div>
        <button className="sideNav_button" onClick={toggleCollapsed} type="button">
          {isCollapsed ? (
            <MenuUnfoldOutlined className="large_text" />
          ) : (
            <MenuFoldOutlined className="large_text" />
          )}
        </button>
      </div>
      <div className="pr-10 cursor-pointer">
        <Dropdown overlay={<Menu items={items} />}>
          <div>
            <Space>
              Baitussalam
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};
HeaderTop.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default HeaderTop;
