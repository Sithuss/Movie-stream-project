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

  constructor(private fb:FormBuilder) {
    this.signupForm = fb.group({
      name:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })
  }

  SignUp() {
    console.log(this.signupForm.value);
  }

}
