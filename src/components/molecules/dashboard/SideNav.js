/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { PictureFilled } from "@ant-design/icons";
import { CustomIcon, Layout, SideMenu } from "components/atoms";
import { useEffect, useState } from "react";
import menuItems from "__fixtures__/menu-items";
import drMenu from "__fixtures__/dr-menu.json";
import patientMenu from "__fixtures__/patient-item.json";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "utils";

const { Sider } = Layout;

const SideNav = ({ isCollapsed }) => {
  const [selectedRoute, setSelectedRoute] = useState(1);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [role, setRole] = useState("");

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      console.log(data, "==============>");
      setRole(data?.role);
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
        menuItems={role === "dr" ? drMenu : role === "patient" ? patientMenu : []}
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
