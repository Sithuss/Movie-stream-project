import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account/user-account.component';

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
