import { Component, Input, OnInit } from '@angular/core';
import { UserTestService } from 'src/app/service/user-test.service';
import { UserRole } from '../model/user-role';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private us: UserTestService){
    //
    this.showAllRole();
  }

  ngOnInit(): void {
      //
  }
  showAllRole(): void{
    this.users$ = this.us.findAll();
  }



  showByRole(name: string) : void{
    this.users$ = this.us.findByRoleName(name);
  }


}
