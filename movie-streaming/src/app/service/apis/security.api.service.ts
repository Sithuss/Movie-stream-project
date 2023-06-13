import { Injectable } from "@angular/core";
<<<<<<< HEAD
=======
import { Observable, of } from "rxjs";
import { SignupUser } from "../dto/signup-user";
import { SigninUser } from "../dto/signin-user";
import { BuyPackageUser } from "../dto/buy-package-user";
>>>>>>> 0884234afb15b34ed8503d5b9f23de8d824d3712



@Injectable({providedIn: 'any'})
export class SecurityApi {

<<<<<<< HEAD
  
=======
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

  buyPackage(form:any):Observable<BuyPackageUser> {
    return of({
      package: form.package,
      quantity: form.quantity
    })
  }
>>>>>>> 0884234afb15b34ed8503d5b9f23de8d824d3712

}
