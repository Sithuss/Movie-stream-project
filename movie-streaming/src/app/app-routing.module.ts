import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'uploader', loadChildren: () => import('./business/uploader/uploader.module').then(m => m.UploaderModule)},
  {path: 'user', loadChildren: () => import('./business/user/user.module').then(m => m.UserModule)},
  {path:'admin', loadChildren: () => import('./business/admin/admin.module').then(m => m.AdminModule)},
  {path:'', redirectTo:'/user', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
