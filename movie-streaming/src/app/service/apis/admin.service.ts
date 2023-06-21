import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { ApiResult, ApiStatus } from "../dto/api.result";

const ADMIN_DOMAIN = `${environment.baseUrl}/admin`

@Injectable({
  providedIn:'any'
})
export class AdminService {

  constructor(private http:HttpClient) {}

  adminAllUsersList():Observable<any[]> {
    return this.http.get<any[]>(`${ADMIN_DOMAIN}/listAllAccounts`);
  }

  adminDeleteUserAccount(uid: number):Observable<any> {
    return this.http.delete<any>(`${ADMIN_DOMAIN}/deleteAcc?id=${uid}`);
  }

  adminDeleteMovie(id:number):Observable<ApiStatus> {
    return this.http.delete<any>(`${ADMIN_DOMAIN}/deleteMovie?id=${id}`);
  }

  adminListAllGenres():Observable<ApiResult> {
    return this.http.get<ApiResult>(`${ADMIN_DOMAIN}/listAllGenres`);
  }

  adminAddGenres(aid: number, genre:any):Observable<ApiResult> {
    return this.http.post<ApiResult>(`${ADMIN_DOMAIN}/addGenre?aid=${aid}`, genre);
  }

}
