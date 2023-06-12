import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {path: '', loadChildren: () => import('./business/user/user-routing.module').then(m => m.UserRoutingModule)},
  {path: 'uploader', loadChildren: () => import('./business/uploader/uploader.module').then(m => m.UploaderModule)},
  {path: 'admin', loadChildren: () => import('./business/admin/admin.module').then(m => m.AdminModule)} // for connect route with admin module setup-01
=======
  {path: 'uploader', loadChildren: () => import('./business/uploader/uploader.module').then(m => m.UploaderModule)},
  {path: 'user', loadChildren: () => import('./business/user/user.module').then(m => m.UserModule)},
  {path:'admin', loadChildren: () => import('./business/admin/admin.module').then(m => m.AdminModule)},
  {path:'', redirectTo:'/user', pathMatch:'full'}
>>>>>>> 43ea109cf3b979003e99429bc7d845db185b0949
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
