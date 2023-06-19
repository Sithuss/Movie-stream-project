import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {


  // profile:any

  // @Input()
  // email?:string

  // @Input()
  // profileType?:string

  // @Input()
  //  canEdit?:boolean

  //   @Input()
  //  btnColor?:string


   

  

  // @ViewChild(ModalDialogComponent)
  // modalDialog?:ModalDialogComponent
  user:any

  


  constructor(private userService:UserService, private router:Router) {}
  ngOnInit(): void {
    console.log(this.userService.validatedUser?.name);
    console.log(this.userService.validatedUser);
  }

  public editAccount():void {
    this.router.navigate(['user/edit-acc'])
  }

  // ngOnChanges(_changes: SimpleChanges): void {
  //   if(this.email) {
  //     this.service.getProfile(this.email).subscribe(result => {
  //       this.profile = result
  //       this.form.patchValue(result)
  //     })
  //   }
  // }

  // edit() {
  //   if(this.canEdit) {
  //     this.modalDialog?.show()
  //   }
  // }

  // save() {
  //   if(this.form.valid) {
  //     this.service.saveProfile(this.form.value).subscribe(result => {
  //       this.form.patchValue(result)
  //       this.profile = result
  //       this.modalDialog?.hide()
  //     })
  //   }
  // }

  // uploadImage(files:FileList | null) {
  //   if(files && files.length > 0) {
  //     this.service.uploadProfileImage({loginId: this.email, image: files[0]}).subscribe(result => {
  //       this.profile = result
  //     })
  //   }
  // }





}
