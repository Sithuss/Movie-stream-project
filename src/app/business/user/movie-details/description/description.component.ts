import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/business/uploader/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input()
  description:any //

  @Output()
  showDetailsListener = new EventEmitter


  movie:Observable<Movie>;

  id!:number;
  constructor(public movieService:MovieService,private route:ActivatedRoute){

    const id = this.route.snapshot.paramMap.get('id') as string;
    this.movie = this.movieService.findAll()
    .pipe(map(ml => ml.find(m => m.id === parseInt(id)))) as Observable<Movie>;    
  }
  ngOnInit(): void {
    
    
  }

}
