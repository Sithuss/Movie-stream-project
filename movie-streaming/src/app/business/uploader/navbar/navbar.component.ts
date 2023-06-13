import {
  Component,
  Output,
  EventEmitter,
  Input,
  AfterViewChecked,
} from '@angular/core';
import { Observable } from 'rxjs';
import { LoginTestUser } from 'src/app/service/dto/login-test-user';
import { NotiTest } from 'src/app/service/dto/noti-test';
import { SignupUser } from 'src/app/service/dto/signup-user';
import { LoginTestService } from 'src/app/service/login-test.service';
import { NotiTestService } from 'src/app/service/noti-test.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewChecked {
  isValue: boolean = false;

  @Output()
  isNight: EventEmitter<boolean> = new EventEmitter<boolean>();

  user!: Observable<LoginTestUser>;
  noti!: NotiTest[];
  notiCount: number = 0;

  constructor(
    private loginServie: LoginTestService,
    private notiService: NotiTestService
  ) {
    this.user = this.loginServie.login();
    this.notiService.findAllNoti().subscribe((r) => (this.noti = r));
  }

  public changeMode() {
    this.isValue = !this.isValue;
    this.isNight.emit(this.isValue);
  }

  logout() {}

  ngAfterViewChecked(): void {
    this.notiCount = this.notiService.notiC;
  }
  resetNoti() {
    this.notiService.resetNotiC();
  }
}
