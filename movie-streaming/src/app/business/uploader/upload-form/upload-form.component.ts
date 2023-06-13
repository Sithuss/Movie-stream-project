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

  constructor(private mService:MovieService, builder:FormBuilder, private router:Router){
    this.form = builder.group({
      title: ['', [Validators.required]],
      length: ['', [Validators.required]],
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
    this.router.navigate(['/uploader', 'home'])
  }
}
