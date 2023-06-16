import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable ({providedIn : 'any'})

export class SignInService {

    constructor(private http:HttpClient) {}

    login(user:any):Observable<any> {
        return this.http.post("")

    }


}