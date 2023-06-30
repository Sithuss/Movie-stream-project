import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/service/apis/profile.service';
import { SecurityService } from 'src/app/service/apis/security/security.service';
import { UserAccountService } from 'src/app/service/apis/user-account.service';
import { UserProfile } from 'src/app/service/dto/user.profile';
import { UserService } from 'src/app/service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {


  profile:any

  @Input()
  email?:string

  user?:UserProfile

  constructor(private userService:UserService,
    private security: SecurityService,
    private router:Router,private service:ProfileService,
    private account: UserAccountService) {
      if(this.security.role === "USER") {
        this.account.userProfile().subscribe(apiResult => {
          this.user = apiResult.result
        });
      }
      if (this.security.role === "UPLOADER") {
        this.account.uploaderProfile().subscribe(apiResult => {
          this.user = apiResult.result
        });
      }
    }



  public editAccount():void {
    this.router.navigate(['user/edit-acc'])
  }
  uploadImage(files:FileList | null) {
    if(files && files.length > 0) {
      this.service.uploadProfileImage({loginId: this.email, image: files[0]}).subscribe(result => {
        this.profile = result
      })
    }
}

history(){
  this.router.navigate(['user/history'])

}
}
