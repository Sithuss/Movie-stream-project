import { Injectable } from '@angular/core';
import { day } from '../business/uploader/model/day';

@Injectable({
  providedIn: 'root'
})
export class DayNightService{

  private isNightMode!: boolean ;

  isNight():day{
    return {
      nightMode :this.isNightMode
    };
  }
  setNight(isDay:boolean){
    this.isNightMode = isDay;
  }
  constructor() { }

}
