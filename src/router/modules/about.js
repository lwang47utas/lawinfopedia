// import store from '@/store'

var aboutRouter = {
  path: '/about',
  name: 'about',
  meta: { title: '关于我们' },
  component: () => import('@/views/about')
}
export default aboutRouter
