import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs';
//import 'rxjs/add/operator';
@Injectable()


export class CommonService {

    constructor(private http: HttpClient) {
    }
    //Get Methods
    registerUser(userData): Observable<any> {
        return this.http.put('http://localhost:3000/api/auth', userData);
    }

    unique(query): Observable<any> {
        return this.http.post('http://localhost:3000/api/auth/username', query);
    }


}
