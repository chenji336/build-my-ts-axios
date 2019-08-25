import { AxiosRequestConfig } from './types'

export default function(config: AxiosRequestConfig): void {
  const xhr = new XMLHttpRequest()
  const { data = null, method = 'get', url } = config
  xhr.open(method.toUpperCase(), url)
  xhr.send(data)
}
