// import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// import { Http } from '@angular/http';
// import 'rxjs';
// import 'rxjs/add/operator';
// @Injectable()
//
//
// export class CommonService {
//
//     constructor(private http: Http) {
//     }
//     //Get Methods
//     getTrainersList(): Observable<any> {
//         return this.http.get("https://young-peak-21708.herokuapp.com/api/TrainerDetails")
//             .map(res => {
//                 return res.json()
//             });
//     }
//
//     getCourseList(): Observable<any> {
//         return this.http.get("https://young-peak-21708.herokuapp.com/api/courses")
//             .map(res => {
//                 return res.json()
//             });
//     }
//
//     addTrainer(userData): Observable<any> {
//         return this.http.post("https://young-peak-21708.herokuapp.com/api/TrainerDetails", userData)
//             .map(res => {
//                 return res.json()
//             });
//     }
//
//     registerUser(userData): Observable<any> {
//         return this.http.post("http://localhost:3000/users/register", userData)
//             .map(res => {
//                 console.log(res);
//                 return res.json()
//             });
//     }
//
//
// }
