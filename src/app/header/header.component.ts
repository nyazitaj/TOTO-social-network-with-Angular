import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, public userServicePublic: UserService) { }

  myToken: string = ''

  ngOnInit(): void {
    //
  }

  // Redirecting to the users list page
  goToUserList() {
    this.router.navigate(['users']);

    if (this.userService.isConnected() == true) {
      this.myToken = this.userService.myToken
    }
  }

  // Redirecting to the articles list page
  goToArticleList() {
    this.router.navigate(['articles']);

    if (this.userService.isConnected() == true) {
      this.myToken = this.userService.myToken
    }
  }

}
