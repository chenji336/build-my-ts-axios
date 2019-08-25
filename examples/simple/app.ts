import axios from '../../src/index'

// console.log(1) // 验证可以自动刷新
axios({
  url: '/simple/get/',
  method: 'get',
  params: {
    a: 1,
    b: 2
  }
})
