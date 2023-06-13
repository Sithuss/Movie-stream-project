import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotiListComponent } from './noti-list/noti-list.component';
import { UploaderListComponent } from './uploader-list/uploader-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DataFlowComponent } from './data-flow/data-flow.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'movie-list', component: MovieListComponent },
      { path: 'noti-list', component: NotiListComponent },
      { path: 'uploader-list', component: UploaderListComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'data-flow', component: DataFlowComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: '', redirectTo: '/admin/admin-dashboard', pathMatch: 'prefix' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
