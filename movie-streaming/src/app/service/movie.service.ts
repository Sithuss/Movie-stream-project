import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Movie } from './../business/uploader/model/movie';

@Injectable({
  providedIn: 'any',
})
export class MovieService {
  private movieList: Movie[] = [
    {
      id: 1,
      title: 'ww3',
      length: 120,
      category: ['war', 'action'],
      actor: 'u ba',
      actress: 'daw hla',
      director: 'ma aye aye win',
      publisher: 'moon',
      released: '2023.5.11',
      description: 'a yan kyan',
      photo: ' http://source.unsplash.com/366x200/?war',
      movieFile: 'achit',
    },
    {
      id: 2,
      title: 'ww2',
      length: 130,
      category: ['war', 'action'],
      actor: 'u mya',
      actress: 'daw warr',
      director: 'steel',
      publisher: 'sun',
      released: '2021.6.12',
      description: 'beetee good',
      photo: ' http://source.unsplash.com/366x200/?wrold,war',
      movieFile: 'woo',
    },
  ];

  findAll(): Observable<Movie[]> {
    return of(this.movieList);
  }
  upload(movie: Movie) {
    movie.id = 3;
    this.movieList.push(movie);
  }

  findById(id: number): Observable<Movie> {
    this.movies$.subscribe((m) => console.log(m));
    return this.movies$.pipe(
      map((ms) => ms.find((m) => m.id === id))
    ) as Observable<Movie>;
  }

  private movieSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(
    []
  );

  movies$: Observable<Movie[]> = this.movieSubject.asObservable();

  searchByCategory(id: number): Observable<any[]> {
    return of(this.movieList);
  }

  search(value: any): Observable<any[]> {
    return of(this.movieList);
  }
}
