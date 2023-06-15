import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderRoutingModule } from './uploader-routing.module';
import { UploaderComponent } from './uploader.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { WidgetsModule } from 'src/app/common/widgets/widgets.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    UploaderComponent,
    HistoryListComponent,
    HomeComponent,
    NavbarComponent,
    UploadFormComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UploaderRoutingModule,
    WidgetsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UploaderModule { }
