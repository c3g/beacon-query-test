import React from 'react';
import styled from 'styled-components';
import { DatabaseOutlined } from '@ant-design/icons';

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
        <BeaconLogo src={orgLogo} alt={orgName}></BeaconLogo>
        <h4>{orgName}</h4>
        {/* <IconWithLink>
          <IconWrapper>
            <LinkOutlined />
          </IconWrapper>
          <a href={orgUrl} target='_blank' rel='noopener noreferrer'>
            <h3>Visit</h3>
          </a>
        </IconWithLink>
        <IconWithLink>
          <IconWrapper>
            <MailOutlined />
          </IconWrapper>
          <a href={orgContact} target='_blank' rel='noopener noreferrer'>
            <h3>Contact</h3>
          </a>
        </IconWithLink> */}
      </InfoBoxLeft>
      <InfoBoxRight>
        <BeaconNameWrapper>{beaconName}</BeaconNameWrapper>
        {/* <h3>Beacon version: {beaconVersion}</h3> */}
        <IconWithText>
          <IconWrapper>
            <DatabaseOutlined />
          </IconWrapper>
          <h4>{datasets.length} Datasets</h4>
        </IconWithText>
      </InfoBoxRight>
    </InfoCardWrapper>
  );
};

const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.07);
  padding: 5px 30px;
  width: 100%;
  margin-bottom: 40px;
  font-family: 'Helvetica Neue';
`;

const BeaconLogo = styled.img`
  max-width: 150px;
  margin-bottom: 5 px;
`;

const InfoBoxLeft = styled.div`
  padding-right: 30px;
  max-width: 400px;
  border-right: 1px solid #bbbbbb;
`;

const InfoBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  justify-content: flex-end;
`;

const BeaconNameWrapper = styled.h3`
  margin-bottom: auto;
`;

const IconWrapper = styled.div`
  padding: 0px 10px 0 0;
`;

const IconWithText = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconWithLink = styled(IconWithText)`
  /* font-family: 'Helvetica Neue'; */
`;

export default BeaconInfoCard;
