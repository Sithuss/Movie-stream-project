import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';

>>>>>>> 9cfdcaf (validator deleted)

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

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

<<<<<<< HEAD
  get form() { return this.signupForm.controls; }
=======
  SignUp() {
    //TODO
    this.router.navigate(['/user/sign-in']);
  }
>>>>>>> 9cfdcaf (validator deleted)

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    console.log(this.signupForm.value);
  }

  adminRegister() {
    console.log("admin registeration triggered");
    console.log(this.signupForm.value);
    // TODO
  }

}
