import * as dashboardServices from '../services/dashboard';

const queryString = require('query-string');

export default {
  namespace: 'dashboard',
  state: {
    list: [],
  },
  reducers: {
    save(state, { data: list }) {
      return { ...state, list };
    },
  },
  effects: {
    * fetch({ payload }, { call, put }) {
      console.log('payload:', payload);
      const { data } = yield call(dashboardServices.fetch, payload);
      console.log('dashboard:', { data });
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, search }) => {
    //     if (pathname === '/dashboard') {
    //       dispatch({ type: 'fetch', payload: queryString.parse(search) });
    //     }
    //   });
    // },
  },
};
