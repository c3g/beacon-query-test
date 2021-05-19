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
        <IconWithLink>
          <IconWrapper>
            <LinkOutlined />
          </IconWrapper>
          <a href={orgUrl} target="_blank" rel="noopener noreferrer"><h3>Visit</h3></a>
        </IconWithLink>
        <IconWithLink>
          <IconWrapper>
            <MailOutlined />
          </IconWrapper>
          <a href={orgContact} target="_blank" rel="noopener noreferrer"><h3>Contact</h3></a>
        </IconWithLink>
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
  margin: 10px;
  padding: 20px;
  font-family: 'Helvetica Neue';
  /* max-width: 700px; */
  /* background-color: hotpink; */
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
  padding: 2px 8px 0 0;
`;

const IconWithText = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconWithLink = styled(IconWithText)`
    font-family: 'Helvetica Neue';
`;


export default BeaconInfoCard;


