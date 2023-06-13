import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploaderComponent } from './uploader.component';
import { HomeComponent } from './home/home.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { NotiComponent } from './noti/noti.component';
import { FormGroupComponent } from 'src/app/common/widgets/form-group/form-group.component';

const routes: Routes = [
  {path: '', component: UploaderComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'upload', component: UploadFormComponent},
    {path: 'noti', component:NotiComponent},
    {path: '', redirectTo: '/uploader/home', pathMatch: 'prefix'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploaderRoutingModule { }
