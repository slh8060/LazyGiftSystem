import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import styles from './index.less';

class HomePage extends React.Component {
  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Header />
        <Container />
      </Layout>
    );
  }
}


export default HomePage;
