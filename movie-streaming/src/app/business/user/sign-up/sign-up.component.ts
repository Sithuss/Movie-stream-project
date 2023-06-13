import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/service/validators/password.match';

>>>>>>> 0884234afb15b34ed8503d5b9f23de8d824d3712

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  admin = true;

  uploader=false;

  status:string = "uploader"

  signupForm: FormGroup;

<<<<<<< HEAD
  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  get form() { return this.signupForm.controls; }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
=======
  constructor(private fb:FormBuilder, private router:Router) {
    this.signupForm = fb.group({
      name:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      // confirmPassword:['', [passwordMatchValidator()]],
      transaction:['', [Validators.required]]
    })
  }

  SignUp() {
    console.log(this.signupForm.value);
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
>>>>>>> 0884234afb15b34ed8503d5b9f23de8d824d3712
    }

    console.log(this.signupForm.value);
  }

  adminRegister() {
    console.log("admin registeration triggered");
    console.log(this.signupForm.value);
    // TODO
  }

}
