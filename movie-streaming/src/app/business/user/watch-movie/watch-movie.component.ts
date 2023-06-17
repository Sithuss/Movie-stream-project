import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MovieService } from 'src/app/service/apis/movie.service';
import { Movie } from '../../uploader/model/movie';

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {
  constructor(
    private mService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  movie$!: Observable<Movie>;
  mId!: number;
  spacing = 'my-2 mx-2';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.movie$ = this.mService
      .findAll()
      .pipe(
        map(ml => ml.find(m => m.id === parseInt(id)))
      ) as Observable<Movie>;
  }







  // getSpacing():number[] {
  //   return Array(0).fill(0);
  // }


}
