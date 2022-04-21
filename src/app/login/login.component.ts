import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: string[] = []

  email: string = "";
  pass: string = "";

  loginUser() {

    console.log(this.email);
    console.log(this.pass);

    this.email = ""
    this.pass = ""

  }
}
