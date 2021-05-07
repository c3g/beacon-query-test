import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu } from "antd";
import {
  ExperimentOutlined,
  ForkOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Redirect, Route, Link, Switch } from "react-router-dom";
import BeaconOverview from "./components/BeaconOverview";
import QueryVariants from "./components/QueryVariants";
import QueryBiosamples from "./components/QueryBiosamples";
import QueryIndividuals from "./components/QueryIndividuals";
import QueryResults from "./components/QueryResults";
import * as api from "./api";

const App = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const [beaconInfo, setBeaconInfo] = useState(null);
  const [queryData, setQueryData] = useState({});
  const [apiRoute, setApiRoute] = useState('')

  const parseBeaconInfo = (data) => {
    if (data == null) {
      return {};
    }

    const { results } = data;
    const info = {
      name: results?.name || "Name not found",
      numDatasets: results?.datasets.length || 0,
      datasets: results?.datasets,
      numBiosamples:
        results?.datasets.reduce((total, ds) => total + ds.sampleCount, 0) || 0,
    };
    return info;
  };

  // load Beacon name and a few statistics
  useEffect(() => {
    api.info().then(r => setBeaconInfo(parseBeaconInfo(r)));
  }, []);

  return (
    <Layout>
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
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          {" "}
          Header{" "}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              <Route exact path="/overview">
                <BeaconOverview beaconInfo={beaconInfo} />
              </Route>
              <Route exact path="/query-variants">
                <QueryVariants
                  queryData={queryData}
                  setQueryData={setQueryData}
                  setApiRoute={setApiRoute}
                />
              </Route>
              <Route exact path="/query-biosamples">
                <QueryBiosamples
                  queryData={queryData}
                  setQueryData={setQueryData}
                  setApiRoute={setApiRoute}
                />
              </Route>
              <Route exact path="/query-individuals">
                <QueryIndividuals
                  queryData={queryData}
                  setQueryData={setQueryData}
                  setApiRoute={setApiRoute}
                />
              </Route>
              <Route exact path="/query-results">
                <QueryResults queryData={queryData} apiRoute={apiRoute}/>
              </Route>
              <Route path="">404: Nothing here</Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>bottom text</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
