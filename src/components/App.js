import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import { Route, Link, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import BeaconOverview from "./BeaconOverview";
import QueryVariants from "./QueryVariants";
import QueryBiosamples from "./QueryBiosamples";
import QueryIndividuals from "./QueryIndividuals";
import QueryResults from "./QueryResults";
import { apiGet } from "../api";

const App = () => {
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
    const getBeaconInfo = async () => {
      const results = await apiGet("/info");
      console.log({ returnedGet: results.response });
      setBeaconInfo(parseBeaconInfo(results.response));
    };
    getBeaconInfo();
  }, []);

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Layout.Content style={{ margin: "24px 16px 0" }}>
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
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
