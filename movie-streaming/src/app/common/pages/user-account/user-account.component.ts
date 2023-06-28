import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/service/apis/profile.service';
import { SecurityService } from 'src/app/service/apis/security/security.service';
import { UserAccountService } from 'src/app/service/apis/user-account.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {


  profile:any

  @Input()
  email?:string

  user:any


  constructor(private userService:UserService,
    private security: SecurityService,
    private router:Router,private service:ProfileService,
    private account: UserAccountService) {
      if(this.security.role === "USER") {
        console.log(this.security.loginUserMail)
        this.account.userProfile().subscribe(data => console.log(data));
      }
      if (this.security.role === "UPLOADER") {
        this.account.uploaderProfile().subscribe(data => this.user = data);
        console.log(this.user)
      }
    }


  ngOnInit(): void {

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
