import React from 'react';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';
import SimpleChart from './simpleChart';

function Dashboard() {
  return (
    <div>
      <Breadcrumb style={{ padding: '16px 24px' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <SimpleChart />
      </div>
    </div>
  );
}

function mapStateToProps({ dashboard }) {
  return {
    dashboard,
  };
}

export default connect(mapStateToProps)(Dashboard);

