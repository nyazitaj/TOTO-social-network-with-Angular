import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ResponseServer,
  UserLogin,
  UserRegister,
  articleList,
  interfaceAddArticle,
  interfaceSingleUser,
  interfaceCommentList
} from './interface';
import { Observable, throwError, tap } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase = "https://reseau.jdedev.fr/api/"
  handleError: any = '';
  data: any = '';
  articles: any = '';
  id: number = 0
  email: string = '';
  myToken: string = '';
  articleList: any = []
  articleListById: articleList[] = []
  commentList: interfaceCommentList[] = []
  commentListByIdForUser: interfaceCommentList[] = []
  articleListByIdForUser: interfaceCommentList[] = []
  newArticleRes: any = '';
  userList: any = []
  singleUser: interfaceSingleUser[] = []
  currentUserData: any = []
  currentUserArticles: any = []
  currentUserComments: any = []

  userDataForProfile: interfaceSingleUser[] = []

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Connecting a new user
  connectUser(login: UserLogin) {
    return this.http.post<ResponseServer>(this.urlBase + "user/connect", login, this.httpOptions)
      .pipe(
        tap(data => {
          this.data = data
          this.id = data.id
          this.email = data.email
          this.myToken = data.token
        }
        ),
        // catchError(this.handleError)
      )

  }

  // Registering a new user
  signupUser(signup: UserRegister) {
    return this.http.post<ResponseServer>(this.urlBase + "user", signup, this.httpOptions)
      .pipe(
        tap(data => {
          this.data = data
        }),
        // catchError(this.handleError)
      )
  }

  httpOptionsForArticle = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.myToken
    })
  };

  /* Articles */

  // Getting the articles list
  getArticleList() {
    this.http.get<articleList>(this.urlBase + 'article', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        this.articleList.push(res)
      });
  }

  getArticletById(id: number) {
    this.articleListById = []

    this.http.get<articleList>(this.urlBase + 'article/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        this.articleListById.push(res)
      });

      return this.articleListById
  }

  // Inserting a new article
  addArticle(paramArticle: interfaceAddArticle) {
    console.log(this.http.post<ResponseServer>(this.urlBase + "article", paramArticle, {
      headers: {
        Authorization: 'tajmns' + this.myToken
      }
    })
      .pipe(
        tap(data => {
          this.data = data
        }),
        // catchError(this.handleError)
      ))
  }

  getArticleByIdForUser(id: number) {
    this.articleListByIdForUser = []

    this.http.get<interfaceCommentList>(this.urlBase + 'user/' + id + '/comment', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        console.log(res)
        this.articleListByIdForUser.push(res)
      });

      return this.articleListByIdForUser
  }

  // Deleting an article
  deleteArticle(id: number) {

    return this.http.delete<interfaceAddArticle>(this.urlBase + 'article/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        console.log(res)
      });
  }

  /* Comments */

  // Getting the comments list
  getCommentsList() {
    this.http.get<interfaceCommentList>(this.urlBase + 'comment', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        this.commentList.push(res)
      });
  }

  getCommentByIdForUser(id: number) {
    this.commentListByIdForUser = []

    this.http.get<interfaceCommentList>(this.urlBase + 'user/' + id + '/comment', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        console.log(res)
        this.commentListByIdForUser.push(res)
      });

      return this.commentListByIdForUser
  }


  /* Users */

  // Get the user list
  getUsersList() {
    this.http.get/* <articleList> */(this.urlBase + 'user', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        this.userList.push(res)
      });

    return this.userList
  }

  // Getting a single use data by id for profile-page
  getSingleUser(id: number) {
    this.singleUser = []

    this.http.get<interfaceSingleUser>(this.urlBase + 'user/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        this.singleUser.push(res)
      });

    return this.singleUser
  }

  // Deleting a use
  deleteUser(id: number) {

    return this.http.delete<interfaceSingleUser>(this.urlBase + 'user/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        console.log(res)
      });
  }

  // Checking wheter a user is connected or not
  isConnected() {
    if (this.myToken != '') {
      return true
    }
    else {
      return false
    }
  }
}
