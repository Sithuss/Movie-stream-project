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
    console.log(this.users);
  }

  validUser(acc:any) {
    let checkAcc = this.users.find(user => user.email === acc.email);

    if (checkAcc.password === acc.password) {
      this.validatedUser = checkAcc;
      console.log("sign up completed.");
    }
    else {
      console.log('error');4200
    }
  }
}
