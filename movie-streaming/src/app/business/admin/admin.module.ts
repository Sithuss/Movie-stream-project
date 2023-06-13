import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { UploaderListComponent } from './uploader-list/uploader-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotiListComponent } from './noti-list/noti-list.component';
import { DataFlowComponent } from './data-flow/data-flow.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    UploaderListComponent,
    MovieListComponent,
    NotiListComponent,
    DataFlowComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
