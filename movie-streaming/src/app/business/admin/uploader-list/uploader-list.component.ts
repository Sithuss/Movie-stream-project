import { Component, Input, OnInit } from '@angular/core';
import { UploaderRole } from '../model/uploader-role';
import { UserTestService } from 'src/app/service/user-test.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-uploader-list',
  templateUrl: './uploader-list.component.html',
  styleUrls: ['./uploader-list.component.css']
})
export class UploaderListComponent {
  // categoryName!:string;
  // @Input()
  // users$!:Observable<User[]>;

  // constructor(private bookService:BookService) {
  // }
  // ngOnInit(): void {
  //   this.books$ = this.bookService.bookByCategory(this.categoryName);
  // }

  // uploader!: string;
  // @Input()
  // users$!: Observable<User[]>;

  // constructor(private us: UserTestService){
  //   //

  //   this.users$ = this.us.findByRoleName(this.uploader);
  // }

  // ngOnInit(): void {
  //     //

  // }



}
