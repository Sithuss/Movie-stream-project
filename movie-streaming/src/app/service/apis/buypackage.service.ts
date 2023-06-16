import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'any'})

export class BuyPackageService {

  constructor(private http:HttpClient){}

  buy(buyPk:any):Observable<any> {
    return this.http.put("http://localhost:8080/user/buy", JSON.stringify(buyPk), {
      headers: {
        'Content-type':'application/json;charset=UTF-8'
      }
    });
  }
}
