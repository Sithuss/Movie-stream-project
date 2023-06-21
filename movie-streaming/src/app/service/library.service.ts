import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, of } from "rxjs";
import { Movie } from "../business/uploader/model/movie";




@Injectable({
    providedIn: 'any',
  })
  export class LibraryService {

    private librarySubject:BehaviorSubject<Movie[]>=
    new BehaviorSubject<Movie[]>([]);

  library:Observable<Movie[]> = this.librarySubject.asObservable();
  saveM: any[] = [];
  movies:Movie[]=[];
  movie!:Movie;

  constructor() {

  }

  public remove(id:number):void{
    this.library.pipe(
      map(bs => bs.filter(b => b.id != id)as Movie[]),
    ).subscribe(
      data=>{this.movies=data;
        this.librarySubject.next(this.movies)}
    );
  }

  findMovieInLibrary() {
    return of(this.movies)
  }
  public addToLibrary(movie:Movie):void {
    this.isExisted(movie)
      .subscribe( data => this.movie=data);
    if(!this.movie){
      this.movies.push(movie);
      this.librarySubject.next(this.movies);
    }
  }

  addToSave(id:number){
    this.saveM.push(id);
    console.log(this.saveM.length)
  }

  isExisted(movie:Movie): Observable<Movie> {
    return of(this.movies)
      .pipe(
        map(movies => movies.find(b => b.id === movie.id)as Movie
    ));
  }

  }










