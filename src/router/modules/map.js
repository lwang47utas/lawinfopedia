// import store from '@/store'

var serviceRouter = [{
    path: '/map',
    name: 'Map',
    meta: { title: '地图页' },
    component: () => import('@/views/map'),
    // redirect: '/answers/legal-issue',
    children: []
  },

  ]
  export default serviceRouter
  