import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent {

  constructor(private builder: FormBuilder, private router:Router){


  }
  editform=this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('')])),
    role:this.builder.control(''),
    isactive:this.builder.control(false)

  });

  proceeededit(){
    if(this.editform.valid){

    }else{

    }
  }

  public home():void{
    this.router.navigate(['user/movie-list'])
  }

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

}
