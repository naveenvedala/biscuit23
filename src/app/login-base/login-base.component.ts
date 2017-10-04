import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-base',
  templateUrl: './login-base.component.html',
  styleUrls: ['./login-base.component.css']
})
export class LoginBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnClick = function() {
    this.router.navigate(['/user']);
  };

}
