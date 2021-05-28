import React from 'react';
import styled from 'styled-components';
import { headerColour, borderColour } from '../constants';

const AgeRange = ({ ageRange, containerWidth }) => {
  return (
    <Wrapper containerWidth={containerWidth}>
      <Title>Age Range</Title>
      <Entry>
        start: <p>{ageRange.start} years</p>
      </Entry>
      <Entry>
        end: <p>{ageRange.end} years</p>
      </Entry>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5px;
  border: 1px solid ${borderColour};
  width: ${(props) => props.containerWidth}px;
`;

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${borderColour};
  background-color: ${headerColour};
`;

const Entry = styled.div`
  font-weight: bold;
  margin: 5px;
  padding-left: 5px;

  & p {
    display: inline;
    font-weight: normal;
    margin-left: 2px;
  }
`;

export default AgeRange;
