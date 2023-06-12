import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { EditAccountComponent } from '../../business/user/edit-account/edit-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from 'src/app/business/user/user.component';


@NgModule({
  declarations: [
    UserAccountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserAccountComponent
  ]
})
export class PagesModule { }
