type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'head'
  | 'HEAD'
  | 'option'
  | 'OPTION'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  params?: any
  data?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  status: number
  statusText: string
  data: any
  headers: any
  request: any
  config: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
