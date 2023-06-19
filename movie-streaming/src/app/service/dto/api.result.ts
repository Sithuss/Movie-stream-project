
type NewType = String

export interface ApiResult {
  status: ApiStatus
  result:NewType[] | any[] | any
}


export declare type ApiStatus = 'Success' | 'Auth' | 'Business'
