import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  form:FormGroup

  constructor(private builder:FormBuilder,private userService:UserService,
    private router:Router) {
    this.form = builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]]
    })
  }

  signIn() {
   if(this.form.valid){
    this.userService.validUser(this.form.value);
    if(this.userService.validatedUser.role === "user"){
      this.router.navigate(['/']);
    }
    if(this.userService.validatedUser.role === "uploader"){
      this.router.navigate(['/uploader']);
    }

    if(this.userService.validatedUser.role === "admin"){
      this.router.navigate(['/admin']);
    }
  }

}
public signup():void {
  this.router.navigate(['user/sign-up'])
}

}
