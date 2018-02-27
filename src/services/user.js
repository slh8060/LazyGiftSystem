import request from '../utils/request';
import config from '../utils/config';

const { api } = config;

const { user } = api;

export async function fetch() {
  return request(user, {
    method: 'get',
  });
};
