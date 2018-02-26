import { routerRedux } from 'dva/router';
import * as loginServices from '../services/login';

export default {
  namespace: 'login',
  state: {},
  reducers: {},
  effects: {
    * login({ payload }, { put, call }) {
      const { data } = yield call(loginServices.login, payload);
      if (data.code === 200) {
        yield put(routerRedux.push('/main'));
      } else {
        throw data;
      }
    },
  },
  subscriptions: {},
};
