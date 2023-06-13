import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './../business/uploader/model/movie';

@Injectable({
  providedIn: 'any'
})
export class MovieService{

  constructor(){}

  private movieList:Movie[] =[
    {
      id:1, title: "ww3",
      length: 120,
      category: {
        id:1, name: "war"
      }, actor: "u ba",
      actress: "daw hla",
      director: "ma aye aye win",
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
      director: "steel",
      publisher: "sun",
      released:'2021.6.12',
      description:"beetee good",
      photo:"ww2",
      movieFile:"woo"
    }
  ]

  findAll():Observable<Movie[]> {
    return of(this.movieList);
  }
  upload(movie:Movie){
    movie.id= 3;
    this.movieList.push(movie);
  }
}
