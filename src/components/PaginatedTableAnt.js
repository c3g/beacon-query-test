import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space, Pagination } from 'antd';

const { Column } = Table;

// TODO: set dynamically
const pagination = { total: 1 };

const PaginatedTable = ({ rows, columns }) => {
  return (
    <Table dataSource={rows} pagination={pagination}>
      {columns.map((c) => (
        <Column title={c.title} dataIndex={c.id} key={c.id} />
      ))}
    </Table>
  );
};

export default PaginatedTable;
