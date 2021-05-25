import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space, Pagination } from 'antd';

const { Column } = Table;

// TODO: set dynamically
const pagination = { total: 100 };

const PaginatedTable = ({ rows, columns }) => {
  console.log({ rows: rows, columns: columns });

  return (
    <Table dataSource={rows} pagination={{ total: rows.length }} rowKey="id">
      {columns.map((c) => (
        <Column title={c.title} dataIndex={c.id} key={c.id} />
      ))}
    </Table>
  );
};

export default PaginatedTable;
// TODO: using columns={columns} prop probably easier
