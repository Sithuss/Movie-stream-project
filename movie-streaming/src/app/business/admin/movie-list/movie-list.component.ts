import { Component, OnInit } from '@angular/core';
import { UserMovieService } from 'src/app/service/apis/user.movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {



  constructor(private movieService:UserMovieService){
    //
  }

  movieList:any[]= [];

  ngOnInit(): void {
    this.movieService.findAll().subscribe(m => {this.movieList = m});
  }




}
