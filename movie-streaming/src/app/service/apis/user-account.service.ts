import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

const USER_DOMAIN = `${environment.baseUrl}/user/account`
const ADMIN_DOMAIN = `${environment.baseUrl}/uploader/account`
const UPLOADER_DOMAIN = `${environment.baseUrl}/admin/account`


@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor() { }

  edit() {

  }
  
}
