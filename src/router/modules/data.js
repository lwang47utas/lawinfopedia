import store from '@/store'

var datarouter = {
  path: 'data',
  name: 'data',
  meta: { title: '数据下载' },
  component: () => import('@/views/data/data.vue')
  // redirect: () => {
  //   return store.state.alert.alertRoute
  // },
//   children: [{
//     path: 'tools',
//     name:"make/tools",
//     component: () => import('@/views/make/modules/tools.vue'),
//   },
//   {
//     path: 'sun',
//     name:"make/sun",
//     component: () => import('@/views/make/modules/sun.vue'),
//   },
//   {
//     path: 'alarmInfomation',
//     name:"make/alarmInfomation",
//     component: () => import('@/views/make/modules/alarmInfomation.vue'),
//   },
//   {
//     path: 'alarmMake',
//     name:"make/alarmMake",
//     component: () => import('@/views/make/modules/alarmMake.vue'),
//   }]
}
export default datarouter
