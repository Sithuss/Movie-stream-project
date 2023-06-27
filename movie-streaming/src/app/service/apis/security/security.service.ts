import { Injectable } from '@angular/core';
import { LoginUser } from '../../dto/login.user';
import { SecurityApiService } from '../security.api.service';
import { tap } from 'rxjs';

const LOGIN_USER_KEY = "com.streaming.loginuser"
const APP_TOKEN_KEY = "com.streaming.token"

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private loginUser?:LoginUser
  private _jwtToken?:string

  constructor(private api:SecurityApiService) {
    let loginUserString = localStorage.getItem(LOGIN_USER_KEY)
    if(loginUserString) {
      this.loginUser = JSON.parse(loginUserString)
    }

    this.jwtToken = localStorage.getItem(APP_TOKEN_KEY)
  }

  logIn(form: any) {
    return this.api.logIn(form).pipe(tap(this.fetchUser));
  }

  userSignUp(form: any) {
    return this.api.registerUser(form);
  }

  uploaderSignUp(form: any) {
    return this.api.registerUploader(form);
  }

  addAdmin(form: any) {
    return this.api.addAdmin(form);
  }

  private fetchUser = (apiResult:any) => {
    this.loginUser = apiResult.result;
    localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(apiResult))
  }

  get loginUserName() {
    return this.loginUser?.name;
  }

  get loginUserMail() {
    if (this.loginUser) {
      return this.loginUser?.email;
    }
    return ""
  }

  get role() {
    if(this.loginUser) {
      return this.loginUser.role;
    }
    return "ANONYMOUS"
  }

  get jwtToken() {
    return this._jwtToken;
  }

  set jwtToken(data:string | null | undefined) {
    if(data) {
      this._jwtToken = data
      localStorage.setItem(APP_TOKEN_KEY, data)
    } else {
      this.signOut()
    }
  }

  signOut() {
    this.loginUser = undefined
    this._jwtToken = undefined
    localStorage.removeItem(LOGIN_USER_KEY)
    localStorage.removeItem(APP_TOKEN_KEY)
  }
}
