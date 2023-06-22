import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const USER_DOMAIN = `${environment.baseUrl}/user/account`
const ADMIN_DOMAIN = `${environment.baseUrl}/uploader/account`
const UPLOADER_DOMAIN = `${environment.baseUrl}/admin/account`


@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private http:HttpClient) { }

  userEditAccount(form:any) {
    this.http.post(`${USER_DOMAIN}/edit`, form);
  }

  uploaderEditAccount(form:any) {
    this.http.post(`${UPLOADER_DOMAIN}/edit`, form);
  }

  adminEditAccount(form:any) {
    this.http.post(`${ADMIN_DOMAIN}/edit`, form);
  }



}
