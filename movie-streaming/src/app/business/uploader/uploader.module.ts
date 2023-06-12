import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderRoutingModule } from './uploader-routing.module';
import { UploaderComponent } from './uploader.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { NotiComponent } from './noti/noti.component';


@NgModule({
  declarations: [
    UploaderComponent,
    FooterComponent,
    HistoryListComponent,
    HomeComponent,
    NavbarComponent,
    UploadFormComponent,
    NotiComponent
  ],
  imports: [
    CommonModule,
    UploaderRoutingModule
  ]
})
export class UploaderModule { }
