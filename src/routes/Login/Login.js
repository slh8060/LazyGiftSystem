import React from 'react';
import { connect } from 'dva';
import styles from './Login.less';

function Login() {
  return (
    <div className={styles.normal}>
      Route Component: Login
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Login);
