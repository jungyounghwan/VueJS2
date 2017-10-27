import lazyLoading from './lazy-loading'

export default {
  name: 'Alert',
  path: '/alert',
  meta: {
    label: '알림'
  },
  component: lazyLoading('home')
}