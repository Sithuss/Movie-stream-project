import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/service/security/security.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private security:SecurityService,
    private router:Router) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  // get form() { return this.signupForm.controls; }

  // onSubmit() {
  //   if (this.signupForm.invalid) {
  //     return;
  //   }

  //   console.log(this.signupForm.value);
  // }

  signUp() {
    if(this.signupForm.valid) {
      this.security.signUp(this.signupForm.value).subscribe(result => {
        if(result) {
          this.router.navigate(['/', result.password.toLocaleLowerCase() ])
        }
      })
    }
  }

}
