import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
// import 'rxjs';
// import 'rxjs/add/operator';
@Injectable()


export class RestService {

    constructor(private http: HttpClient) {
    }

    // Get Methods
    registerUser(userData): Observable<any> {
        return this.http.put('http://localhost:9000/api/auth', userData);
    }

    unique(query): Observable<any> {
        return this.http.post('http://localhost:9000/api/auth/unique', query);
    }

    signin(query): Observable<any> {
        return this.http.post('http://localhost:9000/api/auth', query);
    }

    forgotPassword(query): Observable<any> {
        return this.http.post('http://localhost:9000/api/auth/forgot', query);
    }

    setPassword(query): Observable<any> {
        return this.http.post('http://localhost:9000/api/auth/set', query);
    }


}
