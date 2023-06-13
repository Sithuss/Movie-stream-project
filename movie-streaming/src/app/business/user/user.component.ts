import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  searchForm: FormGroup;
  movies: any[] = [];


  constructor(public movieService:MovieService, builder:FormBuilder,private router:Router){
    this.searchForm = builder.group({
      keyword: ''
    })
    this.movieService.findAll().subscribe(result => {
      this.movies = result
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

  




}
