import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    SignUpComponent,
    UserAccountComponent,
    EditAccountComponent,
    SignInComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignUpComponent,
    UserAccountComponent,
    EditAccountComponent,
    SignInComponent
  ]
})
export class PagesModule { }
