import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Movie } from '../../uploader/model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movie:Observable<Movie>;

  constructor(public movieService:MovieService,private route:ActivatedRoute, private router:Router){

    const id = this.route.snapshot.paramMap.get('id') as string;
    this.movie = this.movieService.findAll().pipe(map(ml => ml.find(m => m.id === parseInt(id)))) as Observable<Movie>;
  }
  ngOnInit(): void {
  }

  public streamMovie(id:any):void{
    console.log(id);
    this.router.navigate(['user/watch',id])
  }

  public goReviews(){
    this.router.navigate(['user/give-reviews'])
  }

  public goHome(){
    this.router.navigate(['/user/movie-list'])
  }


}
