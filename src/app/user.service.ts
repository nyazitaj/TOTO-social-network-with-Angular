import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RetLogin, userIndex, UserRegister } from './interface';
import { Observable, throwError, tap } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase = "https://reseau.jdedev.fr/api/"
  handleError: any = '';
  data: any = '';
  myToken: string = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  connectUser(login: userIndex) {
    return this.http.post<RetLogin>(this.urlBase + "user/connect", login, this.httpOptions)
      .pipe(
        tap(data => {
          this.data = data
          /* console.log(data.id) */
        }
        ),
        catchError(this.handleError)
      )

  }

  signupUser(signup: UserRegister) {
    return this.http.post/* <RetLogin> */(this.urlBase + "", signup, this.httpOptions)
      .pipe(
        tap(data =>
          data
        ),
        catchError(this.handleError)
      )
  }

  httpOptionsForUsers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  listUsers(token: string) {

    return this.data

    // return this.http.get/* <Config> */(this.urlBase, this.httpOptionsForUsers);

    // return this.http.post/* <RetLogin> */(this.urlBase + "/article", token, this.httpOptions)
    //   .pipe(
    //     tap(data =>
    //       data
    //     ),
    //     catchError(this.handleError)
    //   )
  }

  listArticle(token: string) {
    return this.http.post/* <RetLogin> */(this.urlBase + "/article", token, this.httpOptions)
      .pipe(
        tap(data =>
          data
        ),
        catchError(this.handleError)
      )
  }

  // nouvelArticle(token: string) {
  //   return this.http.post/* <RetLogin> */(this.urlBase + "", token, this.httpOptions)
  //     .pipe(
  //       tap(data =>
  //         data
  //       ),
  //       catchError(this.handleError)
  //     )
  // }
}
