import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userIndex } from './interface';
import { Observable, throwError, tap } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase = "https://reseau.jdedev.fr/api/user"
  handleError: any = '';

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
        tap(data =>
          data
        ),
        /* catchError(this.handleError) */
      )
  }

  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get/* <Config> */(this.configUrl);
  }

  /* connection(email: userIndex,) {
    return this.http.post<RetUserIndex>(this.urlBase + "/connect", login, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  } */
}
