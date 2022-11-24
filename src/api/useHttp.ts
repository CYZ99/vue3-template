import type { Method } from 'axios'
import requests from './requests'

export interface HttpConfig {
  url: string
  method: Method
  data?: { [key: string]: any }
  params?: { [key: string]: any }
}
const useHttp = <T>(config: HttpConfig): Promise<T> => {
  return new Promise<T>((reject, resolve) => {
    requests({
      url: config.url,
      method: config.method,
      data: config.data,
      params: config.params
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default useHttp
