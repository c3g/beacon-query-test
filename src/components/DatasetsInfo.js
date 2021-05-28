import React from 'react';
import PaginatedTable from './PaginatedTable';
import { Tag } from 'antd';
import styled from 'styled-components';

const datasetsTableColumns = [
  { dataIndex: 'name', title: 'Dataset' },
  { dataIndex: 'variantCount', title: 'Variant Count' },
  { dataIndex: 'sampleCount', title: 'Sample Count' },
  {
    dataIndex: 'accessType',
    title: 'Access Type',
    render: (accessType) => (
      <Tag color="blue" key={accessType}>
        {accessType}
      </Tag>
    ),
  },
  { dataIndex: 'assemblyId', title: 'Assembly id' },
  {
    dataIndex: 'handovers',
    title: 'Handovers',
    render: (handovers) => (
      <LinksWrapper>{handoverLinks(handovers)}</LinksWrapper>
    ),
  },
];

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > a p {
    margin: 0;
    padding: 0;
  }
`;

function handoverLinks(handovers) {
  if (handovers == null) {
    return '-';
  }
  const links = handovers.map((h, index) => {
    return (
      <a href={h.url} target="_blank" rel="noopener noreferrer">
        <p>{h.note}</p>
      </a>
    );
  });

  return links;
}

const datasetsTableRows = (datasets) => {
  return datasets.map((d) => {
    return {
      name: d.name,
      variantCount: d.variantCount,
      sampleCount: d.sampleCount,
      accessType: d.info.accessType,
      assemblyId: d.assemblyId,
      handovers: d.handovers,
    };
  });
};

const DatasetsInfo = ({ datasetsInfo }) => {
  return (
    <PaginatedTable
      rows={datasetsTableRows(datasetsInfo.results)}
      columns={datasetsTableColumns}
    />
  );
};

export default DatasetsInfo;
