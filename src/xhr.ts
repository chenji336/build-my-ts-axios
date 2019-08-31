import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'

export default function(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    const request = new XMLHttpRequest()
    const { data = null, method = 'get', url, headers, responseType } = config
    request.open(method.toUpperCase(), url)
    if (!data) {
      // 如果data为空，直接删除头Content-Type
      delete headers['Content-Type']
    } else {
      Object.keys(headers).forEach(name => {
        request.setRequestHeader(name, headers[name])
      })
    }

    if (responseType) {
      request.responseType = responseType
    }

    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      }
      // undefined默认也是text
      const responseData =
        responseType && responseType !== 'text' ? request.response : request.responseText
      const responseHeaders = request.getAllResponseHeaders()
      const response: AxiosResponse = {
        status: request.status,
        statusText: request.statusText,
        data: responseData,
        headers: responseHeaders,
        request,
        config
      }
      resolve(response)
    }

    request.send(data)
  })
}
