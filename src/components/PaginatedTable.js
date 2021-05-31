import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space, Pagination } from 'antd';

const { Column } = Table;

// TODO: set dynamically
const pagination = { total: 100 };

const PaginatedTable = ({ rows, columns }) => {
  console.log({ rows: rows, columns: columns });
  return (
    <Table
      dataSource={rows}
      columns={columns}
      pagination={{ total: rows.length }}
      rowKey="dataIndex"
    ></Table>
  );
};

export default PaginatedTable;
