import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/libs/utils'
import store from '../store'
import { APPURL2, APPURL } from '../config.js'

const baseUrl = APPURL
/**
 * 创建axios实例
 * @type {AxiosInstance}
 */
const service = axios.create({
  // api的base_url
  baseURL: baseUrl,
  // 设置请求超时时间30s
  timeout: 300000
})

service.apiUrl = baseUrl

/**
 * 请求参数处理
 */
service.interceptors.request.use(config => {
  return config
  // const token = getToken()

  // if (token) {
  //   config.headers['Authorization'] = 'bearer ' + token
  //   return config
  // }
  // else {
  //   setTimeout(() => {
  //     config.headers['Authorization'] = 'bearer ' + token
  //   }, 2000);
  //   return config
  // }
  // store.dispatch('handleLogin', { username: 'admin', password:123456, auto:false })
})
/**
 * 响应结果处理
 */
service.interceptors.response.use(
  response => {
    // console.log(response);
    // console.group("======本次请求的路径：" + response.config.url)
    const res = response.data
    if (res.code === 200 || res.code === 405) {
      // 服务端定义的响应code码为200时请求成功
      // 使用Promise.resolve 正常响应
      return Promise.resolve(response.data)
    } else if (res.code === 403 || res.code === 401) {
      // 服务端定义的响应code码为403,401时登录已失效或没有登录权限
      // store.dispatch('handleLogout').then(() => {
      //   // store.dispatch("user/handleLogout")
      //   store.dispatch('handleLogout')
      //   location.reload()
      // })
      // store.dispatch('handleLogout')
      // Message.error('登录已失效或没有登录权限')
    } else if (res.code === 500) {
      // console.group("======本次请求的路径：" + response.config.url)
      // Message.error(res.msg)
      return Promise.reject(response.data)
    } else {
      // 使用Promise.reject 响应
      // console.log(response)
      // store.dispatch("handleLogout")
      // location.reload()

      // Message.error(res.msg)
      return Promise.reject(response.data)
    }
  },
  error => {
    let message = ''
    if (error && error.response) {
      console.log(error)
      switch (error.response.status) {
        case 401:
          location.reload()
          return
        case 403:
          message = error.response.data.path + ',' + error.response.data.message
          break
        case 429:
          message = '访问太过频繁，请稍后再试!'
          break
        default:
          message = error.response.data.message ? error.response.data.message : '服务器错误'
          break
      }
      Message.error(message)
      // 请求错误处理
      return Promise.reject(error)
    } else {
      message = '连接服务器失败'
      !error.__CANCEL__ && Message.error(message)
      return Promise.reject(error)
    }
  }
)

export default service
