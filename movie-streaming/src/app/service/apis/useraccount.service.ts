import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'any'})

export class UserAccountService {

    constructor() { }

    findAll():Observable<any[]> {
      return of(
        [
          {name:'', email:'',password:''}
        ]
      )
    }
    

}