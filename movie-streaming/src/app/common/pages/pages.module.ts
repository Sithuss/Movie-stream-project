import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserHistoryComponent } from './user-history/user-history.component';

@NgModule({
  declarations: [
    UserAccountComponent,
    UserHistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserAccountComponent,
    UserHistoryComponent
  ]
})
export class PagesModule { }
