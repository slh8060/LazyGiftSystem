import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Row } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;

const Login = ({
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
               }) => {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      console.log('val:', values);
      dispatch({ type: 'login/login', payload: values });
    });
  }
  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img src="/logo.png" alt={'logo'} />
        <span>LAZY GIFT</span>
      </div>
      <Form>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: 'Please input your username!',
            }],
          })(
            <Input prefix={<Icon type="user" />} onPressEnter={handleOk} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true,
              message: 'Please input your Password!',
            }],
          })(
            <Input prefix={<Icon type="lock" />} type="password" onPressEnter={handleOk} placeholder="Password" />
          )}
        </FormItem>
        <Row>
          <Button type="primary" size="large"  style={{ width: '100%' }} onClick={handleOk}>
            Sign in
          </Button>
          <p className={styles.loginTip}>
            <span>Username：guest</span>
            <span>Password：guest</span>
          </p>
        </Row>
      </Form>
    </div>
  );
}

export default connect()(Form.create()(Login));

