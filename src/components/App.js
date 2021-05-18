import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Spin } from 'antd';
import { Route, Link, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import BeaconOverview from './BeaconOverview';
import QueryVariants from './QueryVariants';
import QueryBiosamples from './QueryBiosamples';
import QueryIndividuals from './QueryIndividuals';
import QueryResults from './QueryResults';
import * as api from '../api';

const App = () => {
  const [beaconInfo, setBeaconInfo] = useState(null);
  const [queryData, setQueryData] = useState({});
  const [apiRoute, setApiRoute] = useState('');

  // load Beacon name and a few statistics
  useEffect(() => {
    api.info().then((r) => setBeaconInfo(parseBeaconInfo(r)));
  }, []);

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Layout.Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              <Route exact path="/overview">
                {beaconInfo ? (
                  <BeaconOverview beaconInfo={beaconInfo} />
                ) : (
                  <Spin />
                )}
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
                <QueryResults queryData={queryData} apiRoute={apiRoute} />
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

function parseBeaconInfo(data) {
  if (data == null) {
    return {};
  }

  const { results } = data;
  return {
    beaconName: results.name,
    beaconVersion: results.version,
    description: results.description,
    datasets: results.datasets,
    orgName: results.organization.name,
    orgLogo: results.organization.logoUrl,
    orgUrl: results.organization.welcomeUrl,
    orgContact: results.organization.contactUrl,
  };
}

export default App;

// overview data:
// name
// logo
// description
// welcome url
// num biosamples
// num individuals

// num cohorts?
// available from /cohorts -> response.numTotalResults
// some individuals may not be in a cohort

// num datasets
// may be zero
// available from  /info -> response.reults.datasets.length
// or /datasets -> response.results.length
