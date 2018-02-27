import * as userServices from '../services/user';

const queryString = require('query-string');

export default {
  namespace: 'user',
  state: {
    userList: [],
  },
  reducers: {
    save(state, { payload: { userList } }) {
      return { ...state, userList };
    },
  },
  effects: {
    * fetch({ payload }, { call, put }) {
      const { data: userList } = yield call(userServices.fetch, payload);
      yield put({ type: 'save', payload: { userList } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/user') {
          dispatch({ type: 'fetch', payload: queryString.parse(search) });
        }
      });
    },
  },
};
