import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userIndex } from './interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase = "https://reseau.jdedev.fr/api/user"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  /* connectUser(login: Login) {
    return this.http.post<RetLogin>(this.urlBase + "/connect", login, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  } */

  connectUser(login: userIndex) {
    return this.http.post/* <RetLogin> */(this.urlBase + "/connect", login, this.httpOptions)
      .pipe(
        /* catchError(this.handleError) */
      )
  }

  /* connection(email: userIndex,) {
    return this.http.post<RetUserIndex>(this.urlBase + "/connect", login, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  } */
}
