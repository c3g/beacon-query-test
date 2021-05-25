import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as api from '../api';
import BeaconInfoCard from './BeaconInfoCard';
import Spinner from './Spinner';

const Header = () => {
  const [beaconInfo, setBeaconInfo] = useState(null);

  // load Beacon name and a few statistics
  useEffect(() => {
    api.info().then((r) => setBeaconInfo(parseBeaconInfo(r)));
  }, []);

  return (
    <HeaderWrapper>
      {beaconInfo ? <BeaconInfoCard beaconInfo={beaconInfo} /> : <Spinner />}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  width: 100vw;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const IconWrapper = styled.div``;

function parseBeaconInfo(data) {
  if (data == null) {
    return {};
  }

  const { results } = data;
  return {
    beaconName: results.name,
    beaconVersion: results.version,
    description: results.description,
    datasets: results.datasets,
    orgName: results.organization.name,
    orgLogo: results.organization.logoUrl,
    orgUrl: results.organization.welcomeUrl,
    orgContact: results.organization.contactUrl,
  };
}

export default Header;
