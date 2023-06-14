import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Movie } from '../../uploader/model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movie:Observable<Movie>;

  id!:number;
  constructor(public movieService:MovieService,private route:ActivatedRoute){

    const id = this.route.snapshot.paramMap.get('id') as string;
    this.movie = this.movieService.findAll().pipe(map(ml => ml.find(m => m.id === parseInt(id)))) as Observable<Movie>;    
  }
  ngOnInit(): void {
  }

  // public streamMovie():void{
  //   this.router.navigate(['user/watch'])
  // }

  // public goReviews(){
  //   this.router.navigate(['user/give-reviews'])
  // }


}
