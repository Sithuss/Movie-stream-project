import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { DayNightService } from 'src/app/service/day-night.service';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from '../model/movie';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit, AfterViewChecked{

  constructor(public dayNightService: DayNightService,
    private movieServie: MovieService){
    }

  isNight!:boolean;

  movieList:BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]> ([]);

  movieList$:Observable<Movie[]> = this.movieList.asObservable();

  ngOnInit(): void {
    this.movieServie.findAll().subscribe(r => {this.movieList.next(r)});
  }

  ngAfterViewChecked(): void {
    this.isNight = !this.dayNightService.isNight().nightMode;
  }

  delete(id:number){
    return this.movieList$.pipe(
      map( ms => ms.find(m => m.id === id))
    )as Observable<Movie>;
  }
}
