import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { DayNightService } from 'src/app/service/day-night.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit, AfterViewChecked{

  constructor(public dayNightService: DayNightService,
    private movieServie: MovieService){

    }

  isNight:boolean = true;

  movieList:any[] = []
  ngOnInit(): void {
    this.movieServie.findAll().subscribe(r => {this.movieList = r})
  }

  ngAfterViewChecked(): void {
    this.isNight = !this.dayNightService.isNight().nightMode;
  }
}
