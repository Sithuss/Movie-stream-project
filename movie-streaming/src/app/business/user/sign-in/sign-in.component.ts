import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityApiService } from 'src/app/service/apis/security.api.service';
import { SecurityService } from 'src/app/service/apis/security/security.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  form:FormGroup

  constructor(private builder:FormBuilder,private security:SecurityService,
    private getIn: SecurityApiService,
    private router:Router) {
    this.form = builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  signIn() {
   if(this.form.valid){
    this.security.logIn(this.form.value).subscribe(data => {
      if(this.security.role === "USER"){
        this.router.navigate(['/']);
      }

      if(this.security.role === "UPLOADER"){
        this.router.navigate(['/uploader']);
      }

      if(this.security.role === "ADMIN"){
        this.router.navigate(['/admin']);
      }

    });
  }

}
public signup():void {
  this.router.navigate(['user/sign-up'])
}

}
