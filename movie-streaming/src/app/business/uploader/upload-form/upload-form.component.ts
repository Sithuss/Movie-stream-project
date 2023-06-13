import { Movie } from './../model/movie';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html'
})
export class UploadFormComponent {


  form:FormGroup

  constructor(private mService:MovieService, builder:FormBuilder){
    this.form = builder.group({
      title: ['', [Validators.required]],
      length: ['', [Validators.required, Validators.min(2)]],
      category: ['', [Validators.required]],
      actor: ['', [Validators.required]],
      actress: ['', [Validators.required]],
      director: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      released: ['', [Validators.required]],
      discription: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      movieFile: ['', [Validators.required]]
    })
  }


  uploadM(m:Movie){
    this.mService.upload(m);
  }
}
