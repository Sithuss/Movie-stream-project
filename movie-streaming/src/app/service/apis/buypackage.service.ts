import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/app/environments/environment";

const USER_DOMAIN = `${environment.baseUrl}/user/buy`

@Injectable({providedIn: 'any'})

export class BuyPackageService {

  constructor(private http:HttpClient){}

  buy(buyPk:any):Observable<any> {
    return this.http.put(`{${USER_DOMAIN}}`, JSON.stringify(buyPk), {
      headers: {
        'Content-type':'application/json;charset=UTF-8'
      }
    });
  }
}
