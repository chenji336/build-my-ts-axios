import { isDate, isPlainObject } from './util'

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  let parts: string[] = []
  Object.keys(params).forEach(key => {
    let val = params[key]
    // 为null或undefined，则不添加key值
    if (val === null || val === undefined) {
      return
    }
    let values = []

    // 考虑数组情况
    if (Array.isArray(val)) {
      key += '[]'
      values = val
    } else {
      values = [val] // 统一转成数组
    }

    values.forEach(val => {
      // 时间情况
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        // 对象情况
        val = JSON.stringify(val)
      }
      // 进行编码
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    // 丢弃hash
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.substr(0, markIndex)
    }
    // 保留原有参数（hash处理需要在前面，否则下一行的拼接无效）
    url += (url.indexOf('?') === -1 ? `?` : `&`) + serializedParams
  }

  return url
}

// 编码，但是一些字符不进行转化
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+') // 约定将 空格 号转为 +
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
