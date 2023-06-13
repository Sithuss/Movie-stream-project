import { Movie } from './../model/movie';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
=======
import { MovieService } from 'src/app/service/movie.service';
>>>>>>> kh-dev

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html'
})
export class UploadFormComponent {

<<<<<<< HEAD
  form:FormGroup

  constructor(
    builder:FormBuilder,

    private router:Router){
      this.form = builder.group({
        title:['',Validators.required],
        category:['',Validators.required]





      })
    }


=======
  constructor(private mService:MovieService){

  }

  uploadM(m:Movie){
    this.mService.upload(m);
  }
>>>>>>> kh-dev
}
