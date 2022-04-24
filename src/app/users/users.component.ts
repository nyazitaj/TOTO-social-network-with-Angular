import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { articleList, UserLogin } from '../interface';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['../app.component.css'],
})
export class UsersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private http: HttpClient) { }

  data: any = []
  urlBase = "https://reseau.jdedev.fr/api/"
  commentList: any = []
  fullArray: any = []
  articleList: any = []
  usersList: any = []


  // Making HTTP headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'tajmns ' + this.userService.myToken
    })
  };

  ngOnInit(): void {
    // Checking if the user is connected
    if (this.userService.myToken == '') {
      this.router.navigate(['']);
    }

    this.usersList = this.userService.getUsersList()

  }

  /* Users */

  getSingleUser(id: number) {
    this.userService.currentUserData = this.userService.getSingleUser(id)
    this.router.navigate(['user-profile']);

    this.userService.currentUserArticles = this.userService.articleList
    this.router.navigate(['user-profile']);

    /* this.userService.currentUserComments = this.userService.commentList
    this.router.navigate(['user-profile']); */

    this.userService.getCommentByIdForUser(id)
    this.router.navigate(['user-profile']);

    this.userService.getArticleByIdForUser(id)
    this.router.navigate(['user-profile']);

    this.userService.getArticletById(id)
    this.router.navigate(['user-profile']);

  }

}
