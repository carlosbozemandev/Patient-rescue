import { Layout, SideNav, HeaderTop, StickyFooter } from "components";
import { UI_TEXT } from "constants";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./style.less";

const Dashboard = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const { Content } = Layout;

  return (
    <Layout className="min-h-screen">
      <SideNav isCollapsed={isCollapsed} />
      <Layout className={isCollapsed ? "site-layout-small" : "site-layout"}>
        <HeaderTop isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
        <Content className="site-layout-background content">
          <Outlet />
        </Content>
        <StickyFooter>{UI_TEXT.COMMON.ALL_RIGHT_RESERVED}</StickyFooter>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
