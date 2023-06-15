import { Movie } from './../model/movie';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
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
      actor: ['', [Validators.required]],
      actress: ['', [Validators.required]],
      director: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      released: ['', [Validators.required]],
      discription: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      movieFile: ['', [Validators.required]],
    });
    // this.inputGroups = [
    //   ['title', 'length', 'category', 'actor'],
    //   ['actress', 'director', 'publisher', 'released'],
    //   ['discription', 'photo', 'movieFile'],
    // ];
  }

  uploadM(m: Movie) {
    this.mService.upload(m);
    this.router.navigate(['/uploader', 'home']);
    this.notiService.addNoti({ descript: 'successfully uploaded' });
  }

  next() {
    if (this.currentIndex < this.inputGroups.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
