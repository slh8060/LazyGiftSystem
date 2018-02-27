import React from 'react';
import { connect } from 'dva';
import { Breadcrumb, Table, Divider } from 'antd';

function User({ userList }) {
  const dataSource = userList.data;
  console.log('dataSource', dataSource);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'ID',
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      isadmin: 'isAdmin',
      dataIndex: 'isadmin',
      key: 'isadmin',
    }, {
      title: 'Operate',
      key: 'operate',
      render: () => (
        <span>
          <a>Edit</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
  return (
    <div>
      <Breadcrumb style={{ padding: '16px 24px' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Qzsang</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <Table rowKey={record => record.id} columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}

function mapStateToProps({ user }) {
  return {
    ...user,
  };
}

export default connect(mapStateToProps)(User);

