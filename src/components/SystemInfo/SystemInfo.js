import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from './SystemInfo.less';

const { Header } = Layout;

const SystemInfo = ({ login, dispatch }) => {
  const { user, isLogin } = login;
  const loginClick = () => {
    console.log('loginClick');
    dispatch({
      type: 'login/query',
      payload: {
        isLogin: isLogin,
      },
    });
  };
  return (
    <Header className={styles.header} >
      <span className={styles.systemName}>懒人礼包</span>
      <span>
        <span className={styles.userName}>{ isLogin ? `欢迎您,${user.username}` : ''}</span>
        <span className={styles.loginButton} onClick={loginClick}>{ isLogin ? '退出' : '登录'}</span>
      </span>
    </Header>
  );
};

function mapStateToProps({ login }) {
  return {
    login,
  };
}

export default connect(mapStateToProps)(SystemInfo);
