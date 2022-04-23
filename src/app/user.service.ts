import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseServer, UserLogin, UserRegister } from './interface';
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
          /* console.log(data.id) */
        }
        ),
        /* catchError(this.handleError) */
      )

  }

  // Registering a new user
  signupUser(signup: UserRegister) {
    return this.http.post<ResponseServer>(this.urlBase + "user", signup, this.httpOptions)
      .pipe(
        tap(data => {
          this.data = data
          /* console.log(data.id) */
        }),
        /* catchError(this.handleError) */
      )
  }

  httpOptionsForUsers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.myToken
    })
  };

  listUsers(token: string) {

    return this.data

    // return this.http.get/* <Config> */(this.urlBase, this.httpOptionsForUsers);

    // return this.http.post/* <ResponseServer> */(this.urlBase + "/article", token, this.httpOptions)
    //   .pipe(
    //     tap(data =>
    //       data
    //     ),
    //     catchError(this.handleError)
    //   )
  }

  httpOptionsForArticle = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.myToken
    })
  };

  listArticle() {
    return this.http.get<ResponseServer>(this.urlBase + "/article", this.httpOptionsForArticle).subscribe({
      next(ret) {
      console.log(ret)
      },
      
      // .pipe(
      //   tap(articles =>
      //     this.articles = 'articles'
      //   ),
      //   /* catchError(this.handleError) */
      // )
  });

  // nouvelArticle(token: string) {
  //   return this.http.post/* <ResponseServer> */(this.urlBase + "", token, this.httpOptions)
  //     .pipe(
  //       tap(data =>
  //         data
  //       ),
  //       catchError(this.handleError)
  //     )
  }
}
