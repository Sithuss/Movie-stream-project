import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/service/security/security.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  name:any

  constructor(private userService:UserService, private router:Router) {}
  ngOnInit(): void {
    console.log(this.userService.validatedUser?.name);
    console.log(this.userService.validatedUser);
  }

  public editAccount():void {
    this.router.navigate(['user/edit-acc'])
  }

 
  

}
