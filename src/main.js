import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'

import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import i18n from './languages/index'

// 组件注册
import commonComponent from './components/index.js'

// 初始化css
import './assets/css/base.css'
import './assets/css/common.css'
import './assets/css/common.less'
import './assets/icon/index'

Vue.use(ElementUI, { locale })

for (const key in commonComponent) {
  Vue.component(key, commonComponent[key])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
