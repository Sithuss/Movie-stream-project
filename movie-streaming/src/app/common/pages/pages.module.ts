import { NgModule } from '@angular/core';

import { UserHistoryComponent } from './user-history/user-history.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserAccountComponent,
    UserHistoryComponent,

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
