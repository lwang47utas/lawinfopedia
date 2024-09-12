import store from '../../store'

const list = store.state.menuList

var helpListRouter = [{
  path: '/allOffices',
  name: 'Pro Bono & Offices',
  meta: { title: 'Pro Bono & Offices' },
  component: () => import('@/views/ADOPTIONGUIDES/index.vue'),
  // component: () => import('@/views/index'),
  children: [
    // {
    //   path: '/help/:type?/:state?/:area?/:oid?',
    //   name: 'Animal Hospitals',
    //   meta: {
    //     title: '帮助列表'
    //   },
    //   component: () => import('@/views/ADOPTIONGUIDES/moudle/detail.vue')
    // }
  ]
}
]

list.forEach(item => helpListRouter[0].children.push({
      path: item.path + '/:state?/:area?/:oid?',
      name: item.name,
      meta: { title: '州、区列表' },
      component: () => import('@/views/ADOPTIONGUIDES/moudle/helpList.vue')
      // component: () => import('@/views/ADOPTIONGUIDES/moudle/helpList.vue')
    }
    //
    // {
    //   path: '/help' + item.path + '/:state?/:area?/:oid?',
    //   name: item.name,
    //   meta:
    //     {
    //       title: '州、区列表'
    //     },
    //   component: () => import('@/views/ADOPTIONGUIDES/moudle/detail.vue')
    // }
  )
)

export default helpListRouter
