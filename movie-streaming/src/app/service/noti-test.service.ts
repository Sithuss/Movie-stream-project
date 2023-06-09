import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { LoginTestUser } from './dto/login-test-user';
import { NotiTest } from './dto/noti-test';

@Injectable({
  providedIn: 'any'
})

export class NotiTestService{

  constructor(){}

  private notiList:NotiTest[] = [
    {
      descript : "successfully uploaded"
    },
    {
      descript : "failed to uploaded"
    },
    {
      descript : "give review"
    }
  ]

  findAllNoti():Observable<NotiTest[]>{
    return of(this.notiList);
  }

  notiC:number=0;
  addNoti(noti:NotiTest){
    this.notiList.push(noti);
    this.handleNoti();
  }

  handleNoti() {
     return this.notiC++;
  }

  resetNotiC(){
    this.notiC = 0;
  }
}
