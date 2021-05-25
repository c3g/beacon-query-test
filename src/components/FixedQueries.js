import React, { useState } from 'react';
import styled from 'styled-components';
import * as api from '../api';

const mtQuery = {
  assemblyId: 'GRCh37.p1',
  referenceName: 'MT',
  start: '1',
  end: '16569',
  includeDatasetResponses: 'ALL',
  limit: '100',
};

const strucuturalQuery = {
  assemblyId: 'GRCh37.p1',
  referenceName: '21',
  start: '42809489',
  end: '42809491',
  includeDatasetResponses: 'ALL',
  limit: '100',
};

const SnpQuery = {
  assemblyId: 'GRCh37.p1',
  referenceName: 'MT',
  referenceBases: 'T',
  alternateBases: 'C',
  start: '150',
  includeDatasetResponses: 'ALL',
  limit: '100',
};

// selection of fixed queries in lieu of forms
const FixedQueries = ({ setQueryResults }) => {
  const submitVariantsQuery = (query) => {
    console.log({ query: query });
    api.variants(query).then((r) => setQueryResults(r));
  };

  return (
    <Wrapper>
      <Button onClick={() => submitVariantsQuery(SnpQuery)}>SNP query</Button>
      <Button onClick={() => submitVariantsQuery(mtQuery)} disabled>
        All MT variants
      </Button>
      <Button onClick={() => submitVariantsQuery(strucuturalQuery)} disabled>
        structural variant query
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Button = styled.button`
  margin: 0 10px;
`;

export default FixedQueries;

// all MT variants
// {"assemblyId":"GRCh37.p1","referenceName":"MT","start":"1","end":"16569","includeDatasetResponses":"ALL","limit":100}

// structural variant query
// assemblyId: GRCh37.p1
// referenceName: 21
// start: 42809489
// end: 42809491

// SNP query, works with multiple endpoints
// assemblyId: GRCh37.p1
// referenceName: MT
// referenceBases: T
// alternateBases: C
// start: 150

// Chr  position	variantID  Alleles(ref/alt)  variantType
// sampleCount
