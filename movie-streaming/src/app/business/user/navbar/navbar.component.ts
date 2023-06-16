import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { UserService } from 'src/app/service/user.service';

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

  constructor(
    builder:FormBuilder,
    private router:Router,
    public userService:UserService,
    private movieService:MovieService) {


  }

  ngOnInit(): void {
    // this.categoryService.findAll().subscribe(result => {
    //   this.categories = result
    // })

    // this.search()
  }

  searchByCategory(id:number) {
    this.movieService.searchByCategory(id).subscribe(result => {
      this.movieList = result
    })
  }








}
