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

const filterSearch = {
  filters: 'BTO:0000089,NCIT:C37967',
};

// selection of fixed queries in lieu of forms
const FixedQueries = ({
  setVariantQueryResults,
  setBiosamplesQueryResults,
  setIndividualsQueryResults,
}) => {
  const submitVariantsQuery = (query) => {
    api.variants(query).then((r) => setVariantQueryResults(r));
    api.biosamples(query).then((r) => setBiosamplesQueryResults(r));
    api.individuals(query).then((r) => setIndividualsQueryResults(r));
  };

  return (
    <Wrapper>
      <Button onClick={() => submitVariantsQuery(SnpQuery)}>SNP query</Button>
      <Button onClick={() => submitVariantsQuery(mtQuery)}>
        All MT variants
      </Button>
      <Button onClick={() => submitVariantsQuery(strucuturalQuery)}>
        structural variant query
      </Button>
      <Button onClick={() => submitVariantsQuery(filterSearch)}>
        blood samples filtered by phenotypic feature (Hypercholesterolemia)
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Button = styled.button`
  margin: 0 10px;
`;

export default FixedQueries;
