import axios from '../../src/index'

/**
 * url的处理
 */

function processUrl() {
  // 数组
  axios({
    method: 'get',
    url: '/base/get',
    params: {
      boo: ['bar', 'baz']
    }
  })

  // 时间
  axios({
    method: 'get',
    url: '/base/get',
    params: {
      boo: new Date()
    }
  })

  // 对象
  axios({
    method: 'get',
    url: '/base/get',
    params: {
      boo: { x: 100 }
    }
  })

  // 特殊字符保留
  axios({
    method: 'get',
    url: '/base/get',
    params: {
      boo: '@&: x'
    }
  })

  // null和undefined不传
  axios({
    method: 'get',
    url: '/base/get',
    params: {
      boo: 'bar',
      foo: null
    }
  })

  // 保留参数
  axios({
    method: 'get',
    url: '/base/get?pre=min',
    params: {
      boo: 'bar'
    }
  })

  // 舍弃hash
  axios({
    method: 'get',
    url: '/base/get?pre=min#hash',
    params: {
      boo: 'bar'
    }
  })
}
// processUrl()


/**
 * data处理
 */

function processData() {
  // 普通对象(返回值为空，因为还没有对header进行处理)---后续添加了headers处理，所以看到是有返回值
  axios({
    method: 'post',
    url: '/base/post',
    data: {
      a: 1,
      b: 'chenji'
    }
  })

  // buffer(在浏览器中因为参数是二进制所以看不到)
  const arr = new Int8Array([21, 31]); // Int8Array理解成占用一个字节，Int32Array理解成4个字节（没有的地方补0）
  axios({
    method: 'post',
    url: '/base/buffer',
    data: arr
  })
}
// processData()

function processHeaders() {
  // plainObject不带content-type
  axios({
    method: 'post',
    url: '/base/post',
    data: {
      a: 1,
      b: 'chenji'
    }
  })

  // plainObject带content-type
  axios({
    method: 'post',
    url: '/base/post',
    data: {
      a: 1,
      b: 'chenji'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // 复杂对象URLSearchParams
  const paramsString = 'x=1&y=2'
  const searchParams = new URLSearchParams(paramsString) // 要考虑兼容性问题

  axios({
    method: 'post',
    url: '/base/post',
    data: searchParams
  })
}
// processHeaders()

function ProcessResponseData() {
  axios({
    method: 'post',
    url: '/base/post',
    data: {
      a: 1,
      b: '陈骥'
    }
  }).then(data => console.log('data:', data))

  axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json', // 自动转成json
    data: {
      a: 1,
      b: '陈骥'
    }
  }).then(data => console.log('data:', data))
}
ProcessResponseData()

