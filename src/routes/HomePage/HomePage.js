import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import Header from '../../components/Header/Header';
import SystemInfo from '../../components/SystemInfo/SystemInfo';
import styles from './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Header />
        <SystemInfo />
      </Layout>
    )
  }
}


export default HomePage;
