import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/service/apis/security/security.service';
import { UserMovieService } from 'src/app/service/apis/user.movie.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  movies:any[] = [];
  searchWord:FormGroup;


  // movies:any[] = []
  // searchForm: any;

  // constructor(private movieService:UserMovieService){

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
    private router:Router,
    public userService:UserService,
    public security: SecurityService,
    private movieService:UserMovieService,
    private fb:FormBuilder) {

      this.searchWord = this.fb.group({
        keyword:['', Validators.required]
      })


  }

  ngOnInit(): void {
    // this.categoryService.findAll().subscribe(result => {
    //   this.categories = result
    // })

    // this.search()
  }

  search() {
    this.movies = [];
    console.log(this.searchWord.value)
    this.movieService.search(this.searchWord.value)
    .subscribe(movie => this.movies = movie);
  }


  searchByCategory(id:number) {
    this.movieService.searchByCategory(id).subscribe(result => {
      this.movieList = result
    })
  }









}
