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
      casts: ['Daniel Radcliffe','Emma Watson'],

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
      casts: ['Edward Cullen','Bella Swan'],

      director: 'Catherine Hardwicke',
      publisher: 'sun',
      released: '2021.6.12',
      description: 'beetee good',
      photo: 'http://source.unsplash.com/366x200/?vampire',
      movieFile: 'woo',
    },
    {
      id: 3,
      title: 'Wedensday',
      length: 130,
      category: ['horror'],
      actor: 'Tyler Galpin',
      actress: 'Wednesday Addams',
      director: 'Tim Burton ',
      publisher: 'sun',
      released: '2022-10-05',
      description: 'Wednesday Addams, a high-school student, finds her brother Pugsley tied up in a locker',
      photo: 'http://source.unsplash.com/366x200/?wednesday',
      movieFile: 'woo',
    },
    {
      id: 4,
      title: 'Annabelle',
      length: 130,
      category: ['horror'],
      actor: 'Edward Cullen',
      actress: 'Bella Swan',
      director: 'King',
      publisher: 'sun',
      released: '2021.6.12',
      description: 'A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists',
      photo: 'http://source.unsplash.com/366x200/?annabelle',
      movieFile: 'woo',

    },
    {
      id: 5,
      title: 'Hidden Love',
      length: 130,
      category: ['romance'],
      actor: 'Chen Zhe Yuan',
      actress: 'Zhao Lusi',
      director: 'libra',
      publisher: 'sun',
      released: 'comming soon',
      description: "Falling in love with her brother's friend",
      photo: 'http://source.unsplash.com/366x200/?cat',
      movieFile: 'woo',


    },
    {
      id: 6,
      title: 'Our Beloved Summer',
      length: 130,
      category: ['romance'],
      actor: 'Choi Woo Sik',
      actress: 'Kim Da Mi',
      director: 'Kim',
      publisher: 'sun',
      released: '2022.6.12',
      description: 'Our Beloved Summer is a story about romance, regret and repressed emotions',
      photo: 'http://source.unsplash.com/366x200/?summer',
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
