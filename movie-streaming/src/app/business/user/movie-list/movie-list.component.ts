import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/service/dto/movie-category';
import { MovieService } from 'src/app/service/apis/movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {


  movies:any[] = [];

  categories:any[] = [];

  mvByCate:any[] = [];

  constructor(private movieService:MovieService, private categoryService:CategoryService, private router:Router){
  }

  ngOnInit(): void {
    this.movieService.findAll().subscribe(result => {
      this.movies = result
    })
    this.categoryService.findAllCate().subscribe(res => this.categories = res);
  }


  search() {

  }

  mvListWithCat(name:any) {
    this.movies = [];

    this.movieService.findAll().subscribe(result => {
      this.movies = result
    });

    this.movies = this.movies.filter(movie => movie.category.includes(name));

    this.router.navigate(['/user/movie-list']);
  }


}
