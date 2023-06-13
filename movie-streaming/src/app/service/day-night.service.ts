import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayNightService{

  private isNightMode!: boolean ;

  isNight(){
    // console.log("this.isNigtmode " + this.isNightMode)
    return this.isNightMode;
  }
  setNight(isDay:boolean){
    // console.log("this.isDay " + isDay);
    this.isNightMode = isDay;
    // console.log("this.night" + this.isNightMode)
  }
  constructor() { }

}
