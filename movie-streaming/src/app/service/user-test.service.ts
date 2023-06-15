import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTestService {

  users: any[] = [
    {name: 'Mg Mg',email: 'mgmg@gmail.com', password: 'admin', role: 'admin'},
    {name: 'Ag Ag',email: 'agag@gmail.com', password: 'uploader', role: 'uploader'},
    {name: 'Phyu Phyu', email: 'phyuphyu@gmail.com', password: 'user', role: 'user'}
  ];

  constructor() { }
}
