import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from '../../uploader/model/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movie:any

  constructor(public movieService:MovieService,private route:ActivatedRoute,
    private router:Router){

  }
  ngOnInit(): void {

    this.route.queryParams.subscribe(param => {
      if(param['id']) {
        let id = param['id']
        this.movie = this.movieService.findMovieById(+ id)
      }
        
    })
  }

  public streamMovie():void{
    this.router.navigate(['/user/watch'])
  }

  public goReviews(){
    this.router.navigate(['/user/give-reviews'])
  }

}
