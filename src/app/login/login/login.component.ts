import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginAs = 'Super Admin';
  constructor() { }

  ngOnInit() {
  }
  selectLogin(loginAs) {
    this.loginAs = loginAs;
  }

}
