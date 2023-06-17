import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {



  constructor(private movieService:MovieService){
    //
  }

  movieList:any[]= [];

  ngOnInit(): void {
    this.movieService.findAll().subscribe(m => {this.movieList = m});
  }




}
