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
  commentList: interfaceCommentList[] = []
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

  /*  httpOptionsForUsers = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       Authorization: this.myToken
     })
   }; */

  // listUsers(token: string) {

  //   return this.data

  //   // return this.http.get/* <Config> */(this.urlBase, this.httpOptionsForUsers);

  //   // return this.http.post/* <ResponseServer> */(this.urlBase + "/article", token, this.httpOptions)
  //   //   .pipe(
  //   //     tap(data =>
  //   //       data
  //   //     ),
  //   //     catchError(this.handleError)
  //   //   )
  // }

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

  // Inserting a new article
  addArticle(paramArticle: interfaceAddArticle) {

    return this.http.post/* <ResponseServer> */(this.urlBase + "article", paramArticle, this.httpOptions)
      .pipe(
        tap(data => {
          // console.log(data);
          // this.newArticleRes = data
        }),
        // catchError(this.handleError)
      )

    /* this.result = this.userService.signupUser({

      pseudo: this.pseudo,
      email: this.email,
      password: this.password,
      avatar: this.avatar

    }).subscribe({

      next: result => {
        console.log(result)
      }

    }) */
  }

  nouvelArticle(token: string) {
    return this.http.post/* <ResponseServer> */(this.urlBase + "", token, this.httpOptions)
      .pipe(
        tap(data =>
          data
        ),
        catchError(this.handleError)
      )
  }

  makeFullArray(param: any) {
    return param
    /* param.forEach((element: [any]) => {
      console.log(element)
    }); */
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

  getCommentsListTemp() {
    return this.http.get<interfaceCommentList>(this.urlBase + 'comment/' + 1, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'tajmns ' + this.myToken
      })
    })
      .subscribe(res => {
        this.commentList.push(res)
        /* console.log(res.contenu) */
      });
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
        /* console.log(res) */
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
        /* console.log(res) */
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
