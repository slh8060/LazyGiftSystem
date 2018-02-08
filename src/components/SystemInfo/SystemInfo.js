import React from 'react';
import { Layout,Breadcrumb } from 'antd';
import styles from './SystemInfo.less';

const { Header, Content, Footer } = Layout;

class SystemInfo extends React.Component {
  render() {
    return (
      <Layout>
        <Header className={styles.header} >
          <span className={styles.systemName}>懒人礼包</span>
          <span>
            <span className={styles.userName}>欢迎您,</span>
            <span className={styles.loginButton}>登录</span>
          </span>
        </Header>
        <Content>
          <Breadcrumb style={{ padding: '16px 24px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Lazy Gift ©2018 Created by  Sulh.
        </Footer>
      </Layout>
    );
  }
}

export default SystemInfo;
