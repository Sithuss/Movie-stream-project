import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SignupUser } from "../dto/signup-user";
import { SigninUser } from "../dto/signin-user";



@Injectable({providedIn: 'any'})
export class SecurityApi {

  signUp(form:any):Observable<SignupUser> {
    return of({
      name: form.name,
      password: form.password,
      email: form.email
    })
  }
  signIn(form:any):Observable<SigninUser> {
    return of({
      name: form.password,
      email: form.email,
      role: form.password
    })
  }

}
