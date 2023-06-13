import { Movie } from './../model/movie';
import { Component } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html'
})
export class UploadFormComponent {

  constructor(private mService:MovieService){

  }

  uploadM(m:Movie){
    this.mService.upload(m);
  }
}
