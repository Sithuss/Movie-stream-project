import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  searchForm: FormGroup;
  movies: any[] = [];
  


  constructor(private movieService:MovieService, builder:FormBuilder,private router:Router){
    this.searchForm = builder.group({
      keyword: ''
    })
  }

  ngOnInit(): void {
    this.movieService.findAll().subscribe(result => {
      this.movies = result
    })

    this.search()
  }

  search() {
    this.movieService.search(this.searchForm.value).subscribe(result => {
      this.movies = result
    })
  }


  showDetails(id:number) {
    this.router.navigate(['/user', 'movie-details'], {queryParams: {id: id}})
  }
}
