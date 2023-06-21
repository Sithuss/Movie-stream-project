import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserMovieService } from 'src/app/service/apis/user.movie.service';
import { LibraryService } from 'src/app/service/library.service';
import { UserService } from 'src/app/service/user.service';
import { Movie } from '../../uploader/model/movie';

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {
  constructor(
    private mService: UserMovieService,
    private router: Router,
    private route: ActivatedRoute,
    private libraryService: LibraryService,
    public userService: UserService
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

      if(!this.userService.validatedUser) {
        this.router.navigate(['/user/sign-up']);
      }
  }

  saveMovie() {
    this.movie$.subscribe(movie => {
      this.libraryService.addToLibrary(movie);
      this.router.navigate(['/user/library','movie.id'])
      console.log('Movie saved in Library: ' , movie);
    });
  }

  saveToL(id:number){
    this.libraryService.addToSave(id);
    this.router.navigate(['/user/library']);
  }









  // getSpacing():number[] {
  //   return Array(0).fill(0);
  // }


}
