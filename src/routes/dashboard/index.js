import React from 'react';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';

function Dashboard() {
  return (
    <div>
      <Breadcrumb style={{ padding: '16px 24px' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        Bill is a cat.
      </div>
    </div>
  );
}

export default connect()(Dashboard);

