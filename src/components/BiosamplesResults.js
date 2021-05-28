import React from 'react';
import PaginatedTable from './PaginatedTable';
import styled from 'styled-components';

const biosamplesTableColumns = [
  { dataIndex: 'id', title: 'id' },
  { dataIndex: 'classifications', title: 'Classifications' },
  { dataIndex: 'handovers', title: 'handovers' },
];

const biosamplesTableRows = (biosamples) => {
  return biosamples.map((b) => {
    return {
      id: b.biosampleId,
      classifications: getClassifications(b),
      handovers: getHandovers(b),
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

function getClassifications(c) {
  return null;
}

function getHandovers(h) {
  return null;
}

export default BiosamplesResults;
