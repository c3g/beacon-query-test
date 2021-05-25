import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ResultsTabs from './ResultsTabs';
import FixedQueries from './FixedQueries';

const App = () => {
  const [queryResults, setQueryResults] = useState(null);

  return (
    <Wrapper>
      <Header />
      <FixedQueries setQueryResults={setQueryResults} />
      <ResultsTabs queryResults={queryResults} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
