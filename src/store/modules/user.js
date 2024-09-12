// 登录
import { login } from '@/api/login'

export default {
  state: {
    username: localStorage.getItem('hn_user'),
    // password: localStorage.getItem('hn_pass'),
    auto: localStorage.getItem('hn_auto'),
    token: localStorage.getItem('hn_token'),
    userId: localStorage.getItem('hn_id')
  },
  mutations: {
    // setPassword(state, val) {
    //   state.password = val
    // },
    setUserName (state, name) {
      state.userName = name
    },
    setToken (state, token) {
      state.token = token
    },
    setAuto (state, auto) {
      state.auto = auto
    },
    setUserId (state, id) {
      state.userId = id
    }

  },
  actions: {
    // 登录
    handleLogin ({ commit }, { username, password, auto }) {
      username = username.trim()// 去除头尾空格
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        }).then(res => {
          if (res) {
            console.log(res)
              const token = res.data
              commit('setToken', token)
              commit('setAuto', auto)
              commit('setUserName', username)
              // commit('setPassword', password)
              localStorage.setItem('hn_auto', JSON.stringify(auto))
              if (auto) {
                localStorage.setItem('hn_user', username, { expires: 7 })
                localStorage.setItem('hn_pass', password, { expires: 7 })
                localStorage.setItem('hn_token', token, { expires: 7 })
              } else {
                localStorage.setItem('hn_token', token, { expires: 7 })
              }
              resolve(res)
            }
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogout ({ commit }) {
      commit('setToken', null)
      commit('setAuto', false)
      // commit('setPassword', "")
      localStorage.removeItem('hn_auto')
      localStorage.removeItem('hn_token')
      localStorage.removeItem('hn_pass')
    }
  }
}
