import { Movie } from './../model/movie';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private mService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  movie$!: Observable<Movie>;
  mId!: number;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.movie$ = this.mService
      .findAll()
      .pipe(
        map((ml) => ml.find((m) => m.id === parseInt(id)))
      ) as Observable<Movie>;
  }

  edit(m: Movie) {
    this.movie$.subscribe((mv) => {
      (mv.title = m.title),
        (mv.length = m.length),
        (mv.category.name = m.category?.name),
        (mv.actor = m.actor),
        (mv.actress = m.actress),
        (mv.director = m.director),
        (mv.publisher = m.publisher),
        (mv.released = m.released),
        (mv.description = m.description),
        (mv.photo = m.photo),
        (mv.movieFile = m.movieFile);
    });
    this.router.navigate(['/uploader', 'home']);
  }
}
