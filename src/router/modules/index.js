import store from '@/store'

var indexRouter = {
  path: '/index',
  name: 'index',
  meta: { title: '首页' },
  component: () => import('@/views/index/index.vue') ,
  // redirect: () => {
  //   return store.state.style.theme.alertRoute
  // },

}
export default indexRouter
