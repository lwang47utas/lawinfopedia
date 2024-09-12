// import store from '@/store'

var serviceRouter = [{
  path: '/answers',
  name: 'Legal Q & A',
  meta: { title: '首页' },
  component: () => import('@/views/liveShow'),
  // redirect: '/answers/legal-issue',
  children: []
},
{
  path: '/answers/legal-issue/:issue?/:id?',
  name: 'legalIssues',
  component: () => import('@/views/liveShow/answerPage')
},

{
  path: '/answers/state/:issue?/:id?',
  name: 'states',
  component: () => import('@/views/liveShow/answerPage')
},
{
  path: '/answers/list',
  name: 'Answer List',
  component: () => import('@/views/liveShow/answerPage')
},
  {
    path: '/news/content/:id?',
    name: 'newsContent',
    component: () => import(/* webpackChunkName: "about" */ '@/views/newMessage/newsContent.vue')
  }
]
export default serviceRouter
