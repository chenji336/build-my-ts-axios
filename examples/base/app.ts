import axios from '../../src/index'

axios({
  method: 'get',
  url: '/base/get',
  params: {
    boo: ['bar', 'baz']
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    boo: new Date()
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    boo: {x: 100}
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    boo: '@&: x'
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    boo: 'bar',
    foo: null
  }
})

axios({
  method: 'get',
  url: '/base/get?pre=min',
  params: {
    boo: 'bar'
  }
})

axios({
  method: 'get',
  url: '/base/get?pre=min#hash',
  params: {
    boo: 'bar'
  }
})
