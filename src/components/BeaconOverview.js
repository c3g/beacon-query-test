import React from 'react';
import styled from 'styled-components';

import {
  DatabaseOutlined,
  MailOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { PaginatedTable } from './PaginatedTable';
import { datasetsTableHeader, makeDatasetsTableRows } from '../utils';
import BeaconInfoCard from './BeaconInfoCard';

const BeaconOverview = ({ beaconInfo }) => {
  const { beaconName, description, datasets, orgName, orgLogo, orgUrl } =
    beaconInfo;

  return (
    <OverviewWrapper>
      <BeaconInfoCard beaconInfo={beaconInfo} />
      <PaginatedTable
        columns={datasetsTableHeader}
        rows={makeDatasetsTableRows(beaconInfo.datasets)}
      />
    </OverviewWrapper>
  );
};

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BeaconLogo = styled.img`
  max-width: 200px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin: 25px;
  padding: 20px;
`;

const InfoBoxLeft = styled.div`
  padding-right: 20px;
  border-right: 1px solid grey;
`;

const InfoBoxRight = styled.div`
  padding: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  /* background-color: hotpink; */
`;

const IconWrapper = styled.div`
  padding: 3px 3px 0 0;
`;

const IconWithText = styled.div`
  display: flex;
  flex-direction: row;
`;

export default BeaconOverview;

// Security reminder for links: when you create a link to an external website, eg <a target="_blank" href="externalsite.com">click here</a>, you must specify rel="noopener noreferer", otherwise the external site can access the current site DOM and take actions using javascript. See details here:
// add "visit"
// add "contact"
