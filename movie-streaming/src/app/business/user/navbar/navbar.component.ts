import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  // movies:any[] = []
  // searchForm: any;

  // constructor(private movieService:MovieService){

  // }

  // ngOnInit(): void {

  //   this.search();

  // }

  // search(){
  //   this.movieService.search(this.searchForm.value).subscribe(result => {
  //     this.movies = result
  //   })
  //   }

  categories:any[] = []
  movieList:any[] = []
  searchForm:FormGroup

  constructor(
    builder:FormBuilder,
    private router:Router,
    private movieService:MovieService) {
    this.searchForm = builder.group({
      keyword: ''
    })

  }

  ngOnInit(): void {
    // this.categoryService.findAll().subscribe(result => {
    //   this.categories = result
    // })

    // this.search()
  }

  search() {
    this.movieService.search(this.searchForm.value).subscribe(result => {
      this.movieList = result
    })
  }

  searchByCategory(id:number) {
    this.movieService.searchByCategory(id).subscribe(result => {
      this.movieList = result
    })
  }



  
  



}
