import { Injectable } from '@angular/core';
import { User } from '../business/admin/model/user';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { UploaderRole } from '../business/admin/model/uploader-role';
import { UserRole } from '../business/admin/model/user-role';
import { AdminRole } from '../business/admin/model/admin-role';

@Injectable({
  providedIn: 'any'
})
export class UserTestService {

  private users: User[] = [
    {id: 1, name: 'Mg Mg',email: 'mgmg@gmail.com', password: 'user', role: 'user'},
    {id: 2, name: 'Ag Ag',email: 'agag@gmail.com', password: 'uploader', role: 'uploader'},
    {id: 3, name: 'Phyu Phyu', email: 'phyuphyu@gmail.com', password: 'user', role: 'user'},
    {id: 4, name: 'Ag Khin',email: 'agkhin@gmail.com', password: 'uploader', role: 'uploader'},
    {id: 5, name: 'Khin Wint War', email: 'khinwintwar@gmail.com', password: 'admin', role: 'admin'}
  ];

  private userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.users);

  users$: Observable<User[]> = this.userSubject.asObservable();

  constructor() {
    //
   }

  findAll(): Observable<User[]> {
    return of(this.users);
  }

  findByRoleName(roleName:string): Observable<User[]> {
    return this.users$.pipe(
      map(u => u.filter(r => r?.role === roleName))
    );
  }

  getUserCount(): number{
    // count user
    return this.users.length;
  }


}
