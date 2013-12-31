/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Header, Dropdown, Menu, Space } from "components/atoms";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  MailFilled,
} from "@ant-design/icons";
import { UI_TEXT } from "constants";
import { auth, db, logout } from "firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { toast } from "utils";

const HeaderTop = ({ isCollapsed, setCollapsed }) => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
      toast({ type: "error" });
    }
  };
  useEffect(() => {
    if (loading) return;
    // eslint-disable-next-line consistent-return
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading, navigate, fetchUserName]);

  console.log(name);

  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          {user?.email}
        </a>
      ),
      icon: <MailFilled />,
      disabled: false,
    },
    {
      key: "3",
      danger: true,
      label: (
        <span tabIndex={-1} role="link" onClick={logout}>
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
              Patient Rescue
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
