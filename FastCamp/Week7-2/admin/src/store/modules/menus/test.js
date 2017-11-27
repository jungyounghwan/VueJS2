import lazyLoading from './lazy-loading'

export default {
  name: 'Test',
  path: '/test',
  meta: {
    label: '테스트메뉴'
  },
  component: lazyLoading('test')
}
