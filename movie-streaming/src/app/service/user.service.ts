import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any[] = [];

  validatedUser:any;

  constructor() { }

  createUser(user:any) {
    this.users.push(user);
  }

  validUser(acc:any) {
    let checkAcc = this.users.find(user => user.email === acc.email);

    if (checkAcc.password === acc.password) {
      this.validatedUser = checkAcc;
    }
    else {
      console.log('error');4200
    }
  }
}
