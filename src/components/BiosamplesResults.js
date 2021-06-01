import React from 'react';
import PaginatedTable from './PaginatedTable';
import { getHandovers } from '../utils/getHandovers';
import { ageInYears } from '../utils/ageInYears';
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
      subjectAgeAtCollection: b.subjectAgeAtCollection,
      handovers: b.handovers,
    };
  });
};

const BiosamplesResults = ({ queryResults }) => {
  const ageRanges = subjectAgeStats(queryResults.results);

  return (
    <>
      <ChartArea>{JSON.stringify(ageRanges)}</ChartArea>
      <PaginatedTable
        rows={biosamplesTableRows(queryResults.results)}
        columns={biosamplesTableColumns}
      />
    </>
  );
};

// styling

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > a p {
    margin: 0;
    padding: 0;
  }
`;

const ChartArea = styled.div``;

// helpers

// collect biosample "subjectAgeAtCollection" stats and sort into bins by decade
function subjectAgeStats(biosamples) {
  const ages = {
    0: 0,
    10: 0,
    20: 0,
    30: 0,
    40: 0,
    50: 0,
    60: 0,
    70: 0,
    80: 0,
    90: 0,
    100: 0,
    unknown: 0,
  };
  biosamples.forEach((e) => {
    let age, ageBin;
    const ISOAge = e.subjectAgeAtCollection;
    if (ISOAge == null) {
      ages.unknown += 1;
    } else {
      age = ageInYears(ISOAge);
      ageBin = 10 * Math.floor(age / 10);
      if (ageBin > 100) {
        ageBin = 100;
      }
      ages[ageBin] += 1;
    }
  });
  return ages;
}

export default BiosamplesResults;
