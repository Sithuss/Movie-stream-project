import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { LoginUser } from "../dto/login.user";

const PUBLIC_DOMAIN = `${environment.baseUrl}/public/security`

@Injectable({providedIn: 'any'})

export class SecurityApiService {

  validatedUser:any;

  constructor(private http:HttpClient) {}

  registerUser(user:any):Observable<any> {
    console.log(user)
    return this.http.post(`${PUBLIC_DOMAIN}/register/user`, JSON.stringify(user), {
      headers: {
        'Content-type':'application/json;charset=UTF-8'
      }
    });
  }

  registerUploader(user: any): Observable<any> {
    console.log(user);
    return this.http.post(`${PUBLIC_DOMAIN}/register/uploader`, JSON.stringify(user), {
      headers: {
        'Content-type':'application/json;charset=UTF-8'
      }
    });
  }

  addAdmin(user: any): Observable<any> {
    return this.http.post(`${PUBLIC_DOMAIN}/addAdmin`, JSON.stringify(user), {
      headers: {
        'Content-type':'application/json;charset=UTF-8'
      }
    });
  }

  logIn(user:any):Observable<any> {
    return this.http.post("http://localhost:8080/public/security/logIn", JSON.stringify(user), {
      headers: {
        'Content-type':'application/json;charset=UTF-8'
      }
    });
  }

}
