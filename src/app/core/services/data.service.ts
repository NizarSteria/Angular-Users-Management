import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser} from '../../shared/interfaces';

@Injectable()
export class DataService {

    usersBaseUrl: string = '/api/users';


    constructor(private http: Http) { }

    getUsers() {
     return this.http.get(this.usersBaseUrl)
      .map( res => res.json() );
    }



}
