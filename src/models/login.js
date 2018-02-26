import { routerRedux } from 'dva/router';
import * as loginServices from '../services/login';

export default {
  namespace: 'login',
  state: {
    isLogin: false,
    user: {},
  },
  reducers: {
    loginSuccess(state, { payload }) {
      const userInfo = payload.user;
      const sessionStorage = window.sessionStorage;
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      return {
        ...state,
        ...payload,
      };
    },
    login(state) {
      return { ...state };
    },
    logout(state) {
      const sessionStorage = window.sessionStorage;
      sessionStorage.setItem('userInfo', JSON.stringify({}));
      return { ...state, user: null, isLogin: false };
    },
  },
  effects: {
    * doLogin({ payload }, { put, call }) {
      const user = payload;
      const { data } = yield call(loginServices.login, payload);
      if (data.code === 200) {
        yield put({
          type: 'loginSuccess',
          payload: {
            user,
            isLogin: true,
          },
        });
        yield put(routerRedux.push('/dashboard'));
      } else {
        throw data;
      }
    },
    * query({ payload }, { put }) {
      console.log('isLogin', payload.isLogin);
      yield put(routerRedux.push({
        pathname: '/login',
      }));
    },
  },
  subscriptions: {},
};
