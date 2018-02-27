import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Layout } from 'antd';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';

const App = ({ children, location }) => {
  const { pathname } = location;
  if (pathname === '/login') {
    return (
      <div>
        {children}
      </div>
    );
  }

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header />
      <Container childPage={children} />
    </Layout>
  );
}

App.propTypes = {
};

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App));
