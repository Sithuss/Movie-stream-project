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
      }, actor: "jakie",
      actress: "daw hla",
      publisher: "moon",
      released:'2023.5.11',
      description:"a yan kyan",
      photo:"ww3",
      movieFile:"achit"
    }
  ]

  findAll():Observable<any[]> {
    return of(this.movieList);
  }
  upload(movie:Movie){
    
  }
}
