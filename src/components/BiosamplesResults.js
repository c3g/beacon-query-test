import React from 'react';
import PaginatedTable from './PaginatedTable';
import { getHandovers } from '../utils/getHandovers';

import styled from 'styled-components';

const biosamplesTableColumns = [
  { dataIndex: 'id', title: 'id' },
  {
    dataIndex: 'handovers',
    title: 'Sample Details',
    render: (handovers) => (
      <LinksWrapper>{getHandovers(handovers)}</LinksWrapper>
    ),
  },
];

const biosamplesTableRows = (biosamples) => {
  return biosamples.map((b) => {
    return {
      id: b.biosampleId,
      handovers: b.handovers,
    };
  });
};

const BiosamplesResults = ({ queryResults }) => {
  return (
    <PaginatedTable
      rows={biosamplesTableRows(queryResults.results)}
      columns={biosamplesTableColumns}
    />
  );
};

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > a p {
    margin: 0;
    padding: 0;
  }
`;

export default BiosamplesResults;
