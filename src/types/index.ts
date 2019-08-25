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
}
