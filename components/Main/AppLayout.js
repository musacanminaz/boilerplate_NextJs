import React, { useState } from "react";

import { Layout, Menu } from "antd";
import AppMenu from "./AppMenu";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Sider, Header, Footer, Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "relative",
          left: 0,
          backgroundColor: "white",
        }}
        trigger={null}
        collapsible
        collapsed={collapse}
      >
        <div className="logo" />

        <AppMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              style: { margin: "24px 16px 0" },
              onClick: () => toggle(),
            }
          )}
        </Header>

        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Content
            style={{
              backgroundColor: "white",
              padding: "24px 24px",
              minHeight: 600,
            }}
          >
            {children}
          </Content>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
