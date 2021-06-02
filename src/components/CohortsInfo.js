import React from 'react';
import styled from 'styled-components';
import ChartContainer from './ChartContainer';
import AgeRange from './AgeRange';
import { chartWidth, chartContainerWidth } from '../constants';

const CohortsInfo = ({ cohortsInfo }) => {
  // display dashboard for cohorts... name and a few charts
  // pie charts for sex, locations, ethnicities
  //  int tuple for age range
  // string for cohort name

  //   fixed chart size for now
  // const chartWidth = 180;
  // const chartContainerWidth = 200;

  const { name, size, sexes, ageRange, eventLocations, ethnicities } =
    cohortsInfo;

  //   show name, size, age range
  return (
    <Wrapper>
      <Name>{name}</Name>
      <ChartArea>
        <AgeRange ageRange={ageRange} containerWidth={chartContainerWidth} />
        <ChartContainer
          title={'Sexes'}
          data={sexes}
          chartWidth={chartWidth}
          containerWidth={chartContainerWidth}
        />
        <ChartContainer
          title={'Ethnicity categories'}
          data={ethnicities}
          chartWidth={chartWidth}
          containerWidth={chartContainerWidth}
        />
        <ChartContainer
          title={'Collection locations'}
          data={eventLocations}
          chartWidth={chartWidth}
          containerWidth={chartContainerWidth}
        />
      </ChartArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: large;
  margin-left: 5px;
`;

const ChartArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export default CohortsInfo;
