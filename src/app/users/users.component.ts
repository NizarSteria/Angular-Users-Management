import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../core/services/data.service';
import { IUser } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'cm-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {

  title: string;
  users : any = [];


  constructor(private dataService: DataService) { }



  ngOnInit() {
    this.dataService.getUsers().subscribe((service) => {
      this.users = service;
    });
  }

}
