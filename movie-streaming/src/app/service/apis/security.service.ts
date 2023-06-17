import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const DOMAIN = `${environment.baseUrl}/public/security`

@Injectable({providedIn: 'any'})

export class SecurityService {

  validatedUser:any;

  constructor(private http:HttpClient) {}

  register(user:any):Observable<any> {
    return this.http.post("http://localhost:8080/public/security/register", JSON.stringify(user), {
      headers: {
        'Content-type':'application/json;charset=UTF-8'
      }
    });
  }

  signIn(user:any) {
    return this.http.post("http://localhost:8080/public/security/signin", user);
  }

}
