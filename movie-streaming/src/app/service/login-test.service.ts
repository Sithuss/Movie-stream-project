import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { LoginTestUser } from './dto/login-test-user';

@Injectable({
  providedIn: 'any'
})

export class LoginTestService{

  constructor(){}

  login():Observable<LoginTestUser>{
    return of(
      {
        name:'Mg Mya',
        email:'mya@gmail.com',
        phone: '091234567',
        company: 'jfj'
      }
    )
  }
}
