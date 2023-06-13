import { Component, Input, OnInit } from '@angular/core';
import { DayNightService } from 'src/app/service/day-night.service';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from '../model/movie';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit{

  constructor(public dayNightService: DayNightService,
<<<<<<< HEAD
    private movieServie: MovieService){}

  isNight!:boolean;
=======
    private movieServie: MovieService){
    }

  isNight!:boolean;

  movieList:BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]> ([]);

  movies : Movie [] = []

  movieList$:Observable<Movie[]> = this.movieList.asObservable();
>>>>>>> 0884234afb15b34ed8503d5b9f23de8d824d3712

  ngOnInit(): void {
    this.movieServie.findAll().subscribe(r => {this.movieList.next(r)});
  }
<<<<<<< HEAD
=======

  ngAfterViewChecked(): void {
    this.isNight = !this.dayNightService.isNight().nightMode;
  }

  delete(id:number){
    return this.movieList$.pipe(
      map( ms => ms.filter(m => m.id != id) as Movie [])
    ).subscribe( d => {
      this.movies = d;
      this.movieList.next(this.movies)
    });
  }
>>>>>>> 0884234afb15b34ed8503d5b9f23de8d824d3712
}
