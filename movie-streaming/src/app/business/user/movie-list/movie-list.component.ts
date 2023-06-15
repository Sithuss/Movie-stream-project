import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/service/dto/movie-category';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {


  movies:any[] = [];

  categories:any[] = [];

  constructor(private movieService:MovieService, private categoryService:CategoryService){
  }

  ngOnInit(): void {
    this.movieService.findAll().subscribe(result => {
      this.movies = result
    })
    this.categoryService.findAllCate().subscribe(res => this.categories = res);
  }


  search() {

  }


}
