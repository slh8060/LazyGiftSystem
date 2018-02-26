import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from './SystemInfo.less';

const { Header } = Layout;

const SystemInfo = () => {
  return (
    <Header className={styles.header} >
      <span className={styles.systemName}>懒人礼包</span>
      <span>
        <span className={styles.userName}>欢迎您,</span>
        <span className={styles.loginButton}>sulh</span>
        <span className={styles.loginButton}>退出</span>
      </span>
    </Header>
  );
};

export default connect()(SystemInfo);
