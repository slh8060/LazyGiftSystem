import request from '../utils/request';
import config from '../utils/config';

const { api } = config;

const { dashboard } = api;

export async function fetch() {
  return request(dashboard, {
    method: 'GET',
  });
}
