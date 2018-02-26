import React from 'react';
import { Layout,Breadcrumb } from 'antd';
import SystemInfo from '../SystemInfo/SystemInfo';

const { Content, Footer } = Layout;

class Container extends React.Component {
  render() {
    return (
      <Layout>
        <SystemInfo />
        <Content>
          {this.props.childPage}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Lazy Gift ©2018 Created by  Sulh.
        </Footer>
      </Layout>
    );
  }
}
Container.propTypes = {
}

export default Container;
