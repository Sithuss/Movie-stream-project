import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SignupUser } from "../dto/signup-user";



@Injectable({providedIn: 'any'})
export class SecurityApi {

  signUp(form:any):Observable<SignupUser> {
    return of({
      name: form.name,
      password: form.password,
      email: form.email
    })
  }

}
