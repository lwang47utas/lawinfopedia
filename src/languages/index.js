import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'

import es from './modules/es';
import en from './modules/en';

Vue.use(VueI18n)
// 从localStorage获取语言选择。
const i18n = new VueI18n({
  silentTranslationWarn: true,
  locale: localStorage.getItem('lawLanguage') || 'en', // 初始未选择默认
  messages: {
    es,
    en
  }
})
locale.i18n((key, value) => i18n.t(key, value)) // 兼容element

export default i18n
