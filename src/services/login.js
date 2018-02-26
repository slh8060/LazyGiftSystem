import request from '../utils/request';

export async function login(data) {
  const { username, password } = data;
  return request('/api/login.json', `username=${username}&userpwd=${password}`);
}
