import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from 'src/app/service/dto/payment';
import { PaymentService } from 'src/app/service/payment.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent {

  editForm:FormGroup

  uploader=false;

  payments$:Payment[] = []

  status:string = "uploader"


 constructor(private formBuilder:FormBuilder,private router:Router,
  public paymentService:PaymentService,private userService:UserService){

       this.editForm= formBuilder.group ({
  
         name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        paymentMethod:['', Validators.required],
        transaction:['', [Validators.required]],
  
      })
      paymentService.getAll().subscribe(
        p => this.payments$ = p
      )
    }
    public home():void{
      if(this.uploader) {
        this.editForm.get('role')?.setValue('uploader');
      }
      this.userService.createUser(this.editForm.value);
      this.router.navigate(['user/movie-list'])
    }
    editUploader() {
      if(this.uploader === false) {
        this.uploader = true;
        this.status = "user";
      } else {
        this.editForm.reset();
        this.uploader = false;
        this.status = "uploader"
      }
    }

  }


  // constructor(private builder: FormBuilder, private router:Router,
  //   public paymentService:PaymentService){


  // }
  // editform=this.builder.group({
  //   name:this.builder.control('',Validators.required),
  //   email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  //   password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('')])),
  //   paymentMethod:['', Validators.required],
  //     transaction:['', [Validators.required]],
  //   role:this.builder.control(''),
  //   isactive:this.builder.control(false)

  // });


  

  // constructor(private formBuilder:FormBuilder){
  //   this.editForm= formBuilder.group ({

  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]

  //   })
  // }
  // editAcc(){
  //   console.log(this.editForm.value)
  // }


