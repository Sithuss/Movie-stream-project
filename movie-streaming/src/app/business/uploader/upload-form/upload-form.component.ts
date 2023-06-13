import { Movie } from './../model/movie';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html'
})
export class UploadFormComponent {

  form:FormGroup

  constructor(
    builder:FormBuilder,
    private mService:MovieService,
    private router:Router){
      this.form = builder.group({
        title:['',Validators.required],
        category:['',Validators.required]
      })
    }


  uploadM(m:Movie){
    this.mService.upload(m);
  }
}
