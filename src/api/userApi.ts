import type { BasicRes } from './type'
import useHttp from './useHttp'

interface RegParams {
  username: string
  password: string
  eamil: string
}

export const reqUserRegister = (params: RegParams) => {
  return useHttp<BasicRes<null>>({
    url: '/v1/user',
    method: 'post'
  })
}
