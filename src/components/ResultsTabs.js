import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import VariantsResults from './VariantsResults';
import CohortsInfo from './CohortsInfo';
import DatasetsInfo from './DatasetsInfo';
import Spinner from './Spinner';
import BiosamplesResults from './BiosamplesResults';
import IndividualsResults from './IndividualsResults';

const { TabPane } = Tabs;

function callback(key) {
  // todo
}

const ResultsTabs = ({
  variantQueryResults,
  biosamplesQueryResults,
  individualsQueryResults,
  cohortsInfo,
  datasetsInfo,
  filteringTerms,
}) => {
  return (
    <TabsWrapper>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Variants" key="1">
          {variantQueryResults && (
            <VariantsResults queryResults={variantQueryResults} />
          )}
        </TabPane>
        <TabPane tab="Biosamples" key="2">
          {biosamplesQueryResults && (
            <BiosamplesResults
              filteringTerms={filteringTerms}
              queryResults={biosamplesQueryResults}
            />
          )}
        </TabPane>
        <TabPane tab="Individuals" key="3">
          {individualsQueryResults && (
            <IndividualsResults
              filteringTerms={filteringTerms}
              queryResults={individualsQueryResults}
            />
          )}
        </TabPane>
        <TabPane tab="Beacon Datasets" key="4">
          <DatasetsInfo datasetsInfo={datasetsInfo} />
        </TabPane>
        <TabPane tab="Cohorts" key="5">
          <CohortsInfo cohortsInfo={cohortsInfo} />
        </TabPane>
      </Tabs>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin: 20px 0;
  padding: 20px;
  font-family: 'Helvetica Neue';
  width: 100vw;
`;

export default ResultsTabs;
