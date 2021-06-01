import React from 'react';
import PaginatedTable from './PaginatedTable';
import { getHandovers } from '../utils/getHandovers';

import styled from 'styled-components';

const individualsTableColumns = [
  { dataIndex: 'id', title: 'id' },
  { dataIndex: 'phenotypicFeatures', title: 'Phenotypic features' },
  { dataIndex: 'diseases', title: 'diseases' },
  {
    dataIndex: 'handovers',
    title: 'Links',
    render: (handovers) => (
      <LinksWrapper>{getHandovers(handovers)}</LinksWrapper>
    ),
  },
];

const individualsTableRows = (individuals) => {
  return individuals.map((i) => {
    return {
      id: i.individualId,
      phenotypicFeatures: getPhenotypicFeatures(i.phenotypicFeatures),
      diseases: getDiseases(i.diseases),
      handovers: i.handovers,
    };
  });
};

const IndividualsResults = ({ queryResults }) => {
  console.log({ indvResults: queryResults });
  return (
    <>
      <ChartArea>some charts here</ChartArea>
      <PaginatedTable
        rows={individualsTableRows(queryResults.results)}
        columns={individualsTableColumns}
      />
    </>
  );
};

const ChartArea = styled.div``;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > a p {
    margin: 0;
    padding: 0;
  }
`;

//helpers

function getPhenotypicFeatures(features) {
  if (features == null || Object.keys(features).length === 0) {
    return [];
  }
  const phenotypicFeatures = [];
  features.forEach((p) => {
    phenotypicFeatures.push(p.phenotypeId);
  });
  return phenotypicFeatures;
}

function getDiseases(diseaseArray) {
  if (diseaseArray == null || Object.keys(diseaseArray).length === 0) {
    return [];
  }
  const diseases = [];
  diseaseArray.forEach((d) => {
    diseases.push(d.diseaseId);
  });
  return diseases;
}

export default IndividualsResults;
