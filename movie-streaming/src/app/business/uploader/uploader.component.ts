import { DayNightService } from '../../service/day-night.service';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {

  constructor(public dayNightService: DayNightService ){

  }


  isDay: boolean = false;

  fromNav(isNight: boolean){
    this.isDay = isNight;
    this.dayNightService.setNight(this.isDay);
  }

}
