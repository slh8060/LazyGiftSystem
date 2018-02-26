import React from 'react';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';

function User() {
  return (
    <div>
      <Breadcrumb style={{ padding: '16px 24px' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Qzsang</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        Qzsang is a pug.
      </div>
    </div>
  );
}

export default connect()(User);

