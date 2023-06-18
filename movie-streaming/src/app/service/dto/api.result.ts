
export interface ApiResult {
  status: ApiStatus
  result:String[] | any[] | any
}


export declare type ApiStatus = 'Success' | 'Auth' | 'Business'
