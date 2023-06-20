import { UserService } from 'src/app/service/user.service';
import { DayNightService } from '../../service/day-night.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
})
export class UploaderComponent implements OnInit {
  constructor(
    public dayNightService: DayNightService,
    private userService: UserService,
    private router: Router
  ) {}

  isDay: boolean = false;

  fromNav(isNight: boolean) {
    this.isDay = isNight;
    this.dayNightService.setNight(this.isDay);
  }

  ngOnInit(): void {
    // if (this.userService.validatedUser.role != 'uploader') {
    //   this.router.navigate(['/user', 'movie-list']);
    // }
  }
}
