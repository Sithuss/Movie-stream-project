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
  route: any;

  constructor(public libraryService:LibraryService,private router:Router) {
    const id = this.route.snapshot.paramMap.get('id') as string;
   this.libraryService.findMovieInLibrary().subscribe(result => this.movies = result)
  }

  removeFromLibrary(id: any):void{
    this.libraryService.remove(parseInt(id));
  }

  public streamMovie(id:any):void{
    console.log(id);
    this.router.navigate(['user/watch',id])
  }
  
}
