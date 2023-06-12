import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:[ './navbar.component.css']
})
export class NavbarComponent {

  isValue: boolean = false;

  @Output()
  isNight: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(){
    
  }

  public changeMode(){
    this.isValue = !this.isValue;
    this.isNight.emit(this.isValue);
  }

  openPopup(){

  }
}
