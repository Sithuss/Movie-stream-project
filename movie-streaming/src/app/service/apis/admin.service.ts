import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { ApiStatus } from "../dto/api.result";

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

}
