import { Injectable } from "@angular/core";
import { SecurityApi } from "../apis/security.api.service";


@Injectable({providedIn: 'root'})
export class SecurityService{

  constructor(private api:SecurityApi) {

  }

}
