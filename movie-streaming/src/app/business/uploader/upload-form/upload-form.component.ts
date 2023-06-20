import { Movie } from './../model/movie';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/apis/movie.service';
import { NotiTestService } from 'src/app/service/noti-test.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
})
export class UploadFormComponent {
  form: FormGroup;
  inputGroups: any[] = [];
  currentIndex = 0;

  constructor(
    private mService: MovieService,
    builder: FormBuilder,
    private router: Router,
    private notiService: NotiTestService
  ) {
    this.form = builder.group({
      title: ['', [Validators.required]],
      length: ['', [Validators.required]],
      category: ['', [Validators.required]],
      casts: ['', [Validators.required]],
      director: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      released: ['', [Validators.required]],
      discription: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      movieFile: ['', [Validators.required]],
      trailer: ['', [Validators.required]],
    });
  }

  uploadM(m: Movie) {
    m.publisher = 'moon';
    this.mService.upload(m);
    this.router.navigate(['/uploader', 'home']);
    this.notiService.addNoti({ descript: 'successfully uploaded' });
  }
}
