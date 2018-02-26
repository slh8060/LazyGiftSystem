import request from '../utils/request';

export async function login(data) {
  const { username, password } = data;
  return request('/api/login.json', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: `username=${username}&userpwd=${password}`,
  });
}
