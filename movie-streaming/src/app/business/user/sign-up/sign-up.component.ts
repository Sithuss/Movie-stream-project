import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from 'src/app/service/apis/security.service';
import { Payment } from 'src/app/service/dto/payment';
import { PaymentService } from 'src/app/service/payment.service';
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

  payments$:Payment[] = []

  status:string = "uploader"

  signupForm: FormGroup;

  errorMessage!:string;


  constructor(private fb:FormBuilder, private router:Router,
    private userRegister: SecurityService,
    private userService:UserService, public paymentService:PaymentService) {

    this.signupForm = fb.group({
      name:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      // confirmPassword:['', [passwordMatchValidator()]],
      compName:['', Validators.required],
      paymentMethod:['', Validators.required],
      transaction:['', [Validators.required]],
      role:['user']
    })

    paymentService.getAll().subscribe(
      p => this.payments$ = p
    )
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

  register() {

    if(this.uploader) {

      this.signupForm.get('role')?.setValue('uploader');

      this.userRegister.registerUploader(this.signupForm.value).subscribe(
        {
          next : (data) => console.log(data),
          error: (err) => this.errorMessage = 'Username already existed',
          complete:() => this.router.navigateByUrl("/user/sign-in")
        }
      );
    }

    if(this.admin) {
      this.signupForm.get('role')?.setValue('admin');

      this.userRegister.registerUser(this.signupForm.value).subscribe(
        {
          next : (data) => console.log(data),
          error: (err) => this.errorMessage = 'Username already existed',
          complete:() => this.router.navigateByUrl("/user/sign-in")
        }
      );
    }

    else {
      this.userRegister.addAdmin(this.signupForm.value).subscribe(
        {
          next : (data) => console.log(data),
          error: (err) => this.errorMessage = 'Username already existed',
          complete:() => this.router.navigateByUrl("/user/sign-in")
        }
      );
    }
    this.router.navigate(['/user/sign-in']);
  }

}
