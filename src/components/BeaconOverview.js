import React from "react";
import styled from 'styled-components'

import { BiData, BiTestTube } from "react-icons/bi";
import { PaginatedTable } from "./PaginatedTable";
import {datasetsTableHeader,makeDatasetsTableRows} from '../utils'
const BeaconOverview = ({beaconInfo}) => {


  return <HeaderWrapper>
      {beaconInfo 
      ? <>
      <p>{beaconInfo.name}</p>
      <InfoBox><IconWrapper><BiData/></IconWrapper><h3>{beaconInfo.numDatasets} Datasets</h3></InfoBox>
      <InfoBox><IconWrapper><BiTestTube/></IconWrapper><h3>{beaconInfo.numBiosamples} Biosamples</h3></InfoBox>
    <PaginatedTable columns={datasetsTableHeader} rows={makeDatasetsTableRows(beaconInfo.datasets)}  />



      </>
      : <h2>waiting...</h2>}

  </HeaderWrapper>;
};

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
  
`

const InfoBox = styled.div` 
    display: flex;
    flex-direction: row;
`
const IconWrapper = styled.div`
`

export default BeaconOverview;
