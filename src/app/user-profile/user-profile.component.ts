import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { articleList, UserLogin } from '../interface';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../app.component.css'],
})
export class UserProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private http: HttpClient) { }

  data: any = []
  urlBase = "https://reseau.jdedev.fr/api/"
  commentList: any = []
  fullArray: any = []
  articleList: any = []
  currentUserData: any = []
  currentUserArticles: any = []
  currentUserComments: any = []
  currentEmail: string = '';

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

    this.currentUserData = this.userService.currentUserData

    // Current user's articles list, filtering them to show 5 only
    this.currentUserArticles = this.userService.currentUserArticles
    /* if(this.currentUserArticles[0]) {
      this.currentUserArticles[0] = this.currentUserArticles[0].filter((item: any, index: any) => item.id == this.currentUserData.id )
    } */
    /* if(this.currentUserArticles[0]) {
      this.currentUserArticles[0] = this.currentUserArticles[0].filter((item: any, index: any) => index < 5 )
    } */

    this.currentUserComments = this.userService.currentUserComments

    this.currentEmail = this.userService.email

  }

  /* Users */
  deleteUser(id: number) {
    if (this.userService.deleteUser(id)) {
      alert("L'utilisateur a été supprimé");
      this.userService.myToken = '';
      this.router.navigate(['signup']);
    }
    else {
      console.log(this.userService.deleteUser(id))
    }
  }
}
