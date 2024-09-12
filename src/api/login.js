import service from '@/libs/request'

/**
 * 登录接口
 * @param username
 * @param password

 */
export function login ({ username, password }) {
  const data = {
    username: username,
    password: password,
    cid: 'xzAdmin'
  }
  return service({
    url: '/admin/log/login',
    params: data,
    method: 'post'
  })
}
