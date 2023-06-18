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
      title: 'Harry Potter and the Deathly Hallows – Part 2',
      length: 120,
      category: ['war', 'action'],
      actor: 'Daniel Radcliffe',
      actress: 'Emma Watson ',
      director: 'Chris Columbus, Alfonso Cuarón, Mike Newell, and David Yates',
      publisher: 'moon',
      released: '2011',
      description:
        'Harry,Ron, and Hermione search for Voldemort remaining Horcruxes in their effort to destory the Dark Lord as the final battle rages on at Hogwarts',

      photo: ' http://source.unsplash.com/366x200/?harryPotter',
      movieFile: 'Fantasy',
    },
    {
      id: 2,
      title: 'Twinlight',
      length: 130,
      category: ['war', 'action'],
      actor: 'Edward Cullen',
      actress: 'Bella Swan',
      director: 'Catherine Hardwicke',
      publisher: 'sun',
      released: '2021.6.12',
      description: 'beetee good',
      photo: 'http://source.unsplash.com/366x200/?vampire',
      movieFile: 'woo',
    },
  ];

  findAll(): Observable<Movie[]> {
    return of(this.movieList);
  }
  upload(movie: Movie) {
    movie.id = 7;
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

  getMovieCount(): number{
    return this.movieList.length;
  }
}
