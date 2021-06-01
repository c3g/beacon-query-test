import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ResultsTabs from './ResultsTabs';
import FixedQueries from './FixedQueries';
import * as api from '../api';
import { ageInYears } from '../utils/ageInYears';

const App = () => {
  // todo: repackage into context or redux
  const [variantQueryResults, setVariantQueryResults] = useState(null);
  const [biosamplesQueryResults, setBiosamplesQueryResults] = useState(null);
  const [individualsQueryResults, setIndividualsQueryResults] = useState(null);
  const [beaconInfo, setBeaconInfo] = useState(null);
  const [cohortsInfo, setCohortsInfo] = useState(null);
  const [datasetsInfo, setDatasetsInfo] = useState(null);
  const [filteringTerms, setFilteringTerms] = useState(null);

  // load Beacon name and a few statistics
  useEffect(() => {
    api.info().then((r) => setBeaconInfo(parseBeaconInfo(r)));
    api.filteringTerms().then((r) => setFilteringTerms(r));
    api.cohorts().then((r) => setCohortsInfo(parseCohortsInfo(r)));
    api.datasets().then((r) => setDatasetsInfo(r));
  }, []);

  return (
    <Wrapper>
      <Header beaconInfo={beaconInfo} />
      <FixedQueries
        setVariantQueryResults={setVariantQueryResults}
        setBiosamplesQueryResults={setBiosamplesQueryResults}
        setIndividualsQueryResults={setIndividualsQueryResults}
      />
      <ResultsTabs
        variantQueryResults={variantQueryResults}
        biosamplesQueryResults={biosamplesQueryResults}
        individualsQueryResults={individualsQueryResults}
        cohortsInfo={cohortsInfo}
        datasetsInfo={datasetsInfo}
        filteringTerms={filteringTerms}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// helper fns

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

function parseCohortsInfo(data) {
  if (data == null) {
    return null;
  }
  const { results } = data;

  // just do first cohort for now, since all test Beacons have only one cohort
  const c = results[0];
  //likewise do a single collection event per cohort
  const event = c.collectionEvents[0];

  return {
    name: c.cohortName,
    size: c.cohortSize,
    sexes: collectValues(event.eventGenders),
    ageRange: ageRange(event.eventAgeRange),
    eventLocations: collectValues(event.eventLocations),
    ethnicities: collectValues(event.eventEthnicities),
  };
}

// collect distribution in pie-chart-friendly format
function collectValues(data) {
  if (data == null || !data.availability) {
    return null;
  }
  return data.distribution.map((e) => {
    return { name: e.type.label, value: e.count };
  });
}

function ageRange(range) {
  if (range == null) {
    return null;
  }
  return { start: ageInYears(range.start), end: ageInYears(range.end) };
}

export default App;
