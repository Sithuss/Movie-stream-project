import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/service/security/security.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  form:FormGroup

  constructor(
    builder:FormBuilder,
    private sercurity:SecurityService,
    private router:Router) {
    this.form = builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]]
    })
  }

  signIn() {
    if(this.form.valid) {
      this.sercurity.signIn(this.form.value).subscribe(result => {
        if(result) {
          this.router.navigate(['/', result.role.toLocaleLowerCase() ])
        }
      })
    }
  }


}
