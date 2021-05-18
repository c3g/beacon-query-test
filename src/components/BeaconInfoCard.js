import React from 'react';
import styled from 'styled-components';
import {
  DatabaseOutlined,
  MailOutlined,
  LinkOutlined,
} from '@ant-design/icons';

const BeaconInfoCard = ({ beaconInfo }) => {
  const {
    beaconName,
    beaconVersion,
    datasets,
    orgName,
    orgLogo,
    orgUrl,
    orgContact,
  } = beaconInfo;

  return (
    <InfoCardWrapper>
      <InfoBoxLeft>
        <BeaconLogo src={orgLogo}></BeaconLogo>
        <h3>{orgName}</h3>
        <IconWithText>
          <IconWrapper>
            <LinkOutlined />
          </IconWrapper>
          <h3>{orgUrl}</h3>
        </IconWithText>
        <IconWithText>
          <IconWrapper>
            <MailOutlined />
          </IconWrapper>
          <h3>{orgContact}</h3>
        </IconWithText>
      </InfoBoxLeft>
      <InfoBoxRight>
        <BeaconNameWrapper>{beaconName}</BeaconNameWrapper>
        <h3>Beacon version: {beaconVersion}</h3>
        <IconWithText>
          <IconWrapper>
            <DatabaseOutlined />
          </IconWrapper>
          <h3>{datasets.length} Datasets</h3>
        </IconWithText>
      </InfoBoxRight>
    </InfoCardWrapper>
  );
};

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BeaconLogo = styled.img`
  max-width: 200px;
  margin-bottom: 10px;
`;

const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin: 25px;
  padding: 20px;
`;

const InfoBoxLeft = styled.div`
  padding-right: 20px;
  border-right: 1px solid #bbbbbb;
`;

const InfoBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: flex-end;
  /* background-color: hotpink; */
`;

const BeaconNameWrapper = styled.h1``;

const IconWrapper = styled.div`
  padding: 3px 5px 0 0;
`;

const IconWithText = styled.div`
  display: flex;
  flex-direction: row;
`;

export default BeaconInfoCard;

// fix link and contact to real link and contact
