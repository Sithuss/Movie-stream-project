import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderRoutingModule } from './uploader-routing.module';
import { UploaderComponent } from './uploader.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { WidgetsModule } from 'src/app/common/widgets/widgets.module';


@NgModule({
  declarations: [
    UploaderComponent,
    FooterComponent,
    HistoryListComponent,
    HomeComponent,
    NavbarComponent,
    UploadFormComponent
  ],
  imports: [
    CommonModule,
    UploaderRoutingModule,
    WidgetsModule
  ]
})
export class UploaderModule { }
