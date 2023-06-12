export interface Movie {
  id:number
  title:string
  length:number
  category:{
    id:number
    name:string
  }
  actor:string
  actress:string
  publisher:string
  released:string
  description:string
  photo:string
  movieFile:any
}
