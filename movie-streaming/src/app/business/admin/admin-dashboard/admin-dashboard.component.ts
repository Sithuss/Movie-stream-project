import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTestService } from 'src/app/service/user-test.service';
import { User } from '../model/user';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  userCount: number;
  movieCount: number;

  constructor(private us: UserTestService, private movieService: MovieService){
    this.userCount = us.getUserCount();
    this.movieCount = movieService.getMovieCount();

  }


  // users$!: Observable<User[]>;


  // constructor(private us: UserTestService){}
  // ngOnInit(): void {
  //   //this.us.findAll().subscribe(u => {this.users$ = u});

  // }

  // findByRole(name: string) : void{
  //   this.users$ = this.us.findByRoleName(name);
  // }


}
