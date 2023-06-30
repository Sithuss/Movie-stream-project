import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityService } from './security/security.service';
import { __param } from 'tslib';

const USER_DOMAIN = `${environment.baseUrl}/user/account`
const PUBLIC_DOMAIN = `${environment.baseUrl}/public/account`
const ADMIN_DOMAIN = `${environment.baseUrl}/uploader/account`
const UPLOADER_DOMAIN = `${environment.baseUrl}/admin/account`


@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private http:HttpClient, private security: SecurityService) { }

  userEditAccount(form:any) {
    this.http.post(`${USER_DOMAIN}/edit`, form);
  }

  uploaderEditAccount(form:any) {
    this.http.post(`${UPLOADER_DOMAIN}/edit`, form);
  }

  adminEditAccount(form:any) {
    this.http.post(`${ADMIN_DOMAIN}/edit`, form);
  }

  userProfile(): Observable<any> {
    return this.http.get(`${PUBLIC_DOMAIN}/userProfile?email=${this.security.loginUserMail}`);
  }

  uploaderProfile(): Observable<any> {
    return this.http.get(`${PUBLIC_DOMAIN}/uploaderProfile?email=${this.security.loginUserMail}`);
  }
}
