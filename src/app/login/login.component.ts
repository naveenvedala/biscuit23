import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  position = 'before';
  login: FormGroup;


  constructor(private router: Router) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  btnClick(event) {
    let data = this.login.value;
    if (data.email == 'naveen@gmail.com' && data.password == 'naveen') {
      this.router.navigate(["/dashboard"]);
      //$location.url( "/messages" );
    } else {
      this.router.navigate([""])
    }
  }

}
