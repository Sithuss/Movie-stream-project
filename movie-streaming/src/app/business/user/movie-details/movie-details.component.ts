import { Component, OnInit } from '@angular/core';
import { UserMovieService } from 'src/app/service/apis/user.movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Movie } from '../../uploader/model/movie';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movie:Observable<Movie>;

  constructor(public movieService:UserMovieService, private route:ActivatedRoute, private router:Router,
              private filter:DomSanitizer){

    const id = this.route.snapshot.paramMap.get('id') as string;
    this.movie = this.movieService.findAll().pipe(map(ml => ml.find(m => m.id === parseInt(id)))) as Observable<Movie>;
    // this.filter.bypassSecurityTrustResourceUrl(this.movie);
  }
  ngOnInit(): void {
  }

  // getSafeTrailerUrl(): SafeResourceUrl {

  // }

  public streamMovie(id:any):void{
    console.log(id);
    this.router.navigate(['user/watch',id])
  }

  public goReviews(id:number):void{
    this.router.navigate(['user/give-reviews',id])
  }

  public goHome(){
    this.router.navigate(['/user/movie-list'])
  }


}
