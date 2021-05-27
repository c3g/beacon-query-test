import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import VariantsResults from './VariantsResults';

const { TabPane } = Tabs;

function callback(key) {
  // todo
}

const ResultsTabs = ({ queryResults }) => {
  console.log({ queryResults: queryResults });
  return (
    <TabsWrapper>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Variants" key="1">
          {queryResults && <VariantsResults queryResults={queryResults} />}
        </TabPane>
        <TabPane tab="Biosamples" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Beacon Databases" key="3">
          Content of Tab Pane 3
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