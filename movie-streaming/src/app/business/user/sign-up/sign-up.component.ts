import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { passwordMatchValidator } from 'src/app/service/validators/password.match';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  admin = false;

  uploader=false;

  status:string = "uploader"

  signupForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private userService:UserService) {
    this.signupForm = fb.group({
      name:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      // confirmPassword:['', [passwordMatchValidator()]],
      transaction:['', [Validators.required]],
      premimPk:0,
      role:['user']
    })
  }

  SignUp() {

    if(this.uploader) {
      this.signupForm.get('role')?.setValue('uploader');
    }
    this.userService.createUser(this.signupForm.value);
    // console.log(this.signupForm.value);
    //TODO
    this.router.navigate(['/user/sign-in']);
  }

  changeUploader() {
    if(this.uploader === false) {
      this.uploader = true;
      this.status = "user";
    } else {
      this.signupForm.reset();
      this.uploader = false;
      this.status = "uploader"
    }
  }

  adminRegister() {
    console.log("admin registeration triggered");
    this.signupForm.get('role')?.setValue('admin');
    console.log(this.signupForm.value);
    // TODO
  }

}
