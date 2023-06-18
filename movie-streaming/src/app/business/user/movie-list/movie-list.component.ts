import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  searchWord:FormGroup;

  constructor(private movieService:MovieService, private categoryService:CategoryService,
     private router:Router,private fb:FormBuilder){
    this.searchWord = this.fb.group({
      keyword:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.movieService.findAll().subscribe(result => {
      this.movies = result
    })
    this.categoryService.findAllCate().subscribe(res => this.categories = res);
  }


  search() {
    this.movies = [];
    console.log(this.searchWord.value)
    this.movieService.search(this.searchWord.value)
    .subscribe(movie => this.movies = movie);
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
