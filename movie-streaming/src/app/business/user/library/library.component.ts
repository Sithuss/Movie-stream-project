import { Component, NgIterable } from '@angular/core';
import { LibraryService } from '../../../service/library.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../uploader/model/movie';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

  movies:any
  library!: Observable<Movie>;

  constructor(public libraryService:LibraryService,private router:Router) {
   this.libraryService.findMovieInLibrary().subscribe(result => this.movies = result)
  }

  removeFromLibrary(id: any):void{
    this.libraryService.remove(parseInt(id));
  }

  public goHome(){
    this.router.navigate(['/user/movie-list'])
  }
  
}
