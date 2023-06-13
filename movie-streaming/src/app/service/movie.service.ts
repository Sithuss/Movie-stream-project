import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Movie } from '../business/uploader/model/movie';

@Injectable({
  providedIn: 'any'
})
export class MovieService{



  private movieList:Movie[] =[
    {
      id:1, title: "ww3",
      length: 120,
      category: {
        id:1, name: "war"
      }, actor: "u ba",
      actress: "daw hla",
      publisher: "moon",
      released:'2023.5.11',
      description:"a yan kyan",
      photo:"ww3",
      movieFile:"achit"
    },
    {
      id:2, title: "ww2",
      length: 130,
      category: {
        id:1, name: "war"
      }, actor: "u mya",
      actress: "daw warr",
      publisher: "sun",
      released:'2021.6.12',
      description:"beetee good",
      photo:"ww2",
      movieFile:"woo"
    }
  ]

  private movieSubject:BehaviorSubject<Movie[]>=
    new BehaviorSubject<Movie[]>([]);

  movies$:Observable<Movie[]>=this.movieSubject.asObservable();

  findMovieById(id:number):Observable<Movie>{
    return this.movies$.pipe(
      map(movies => movies.find(b => b.id === id))

    )as Observable<Movie>;
  }


  searchByCategory(id: number):Observable<any[]> {
    return of(this.movieList)
  }

  search(value: any):Observable<any[]> {
    return of(this.movieList)
  }

  findAll():Observable<any[]> {

    return of(this.movieList);
  }

  upload(movie:Movie){

  }

  

}
