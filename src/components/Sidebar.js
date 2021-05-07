import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  ExperimentOutlined,
  ForkOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

export default function Sidebar() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/overview">Overview</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ForkOutlined />}>
          <Link to="/query-variants">Query Variants</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ExperimentOutlined />}>
          <Link to="/query-biosamples">Query Biosamples</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          <Link to="/query-individuals">Query Individuals</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
