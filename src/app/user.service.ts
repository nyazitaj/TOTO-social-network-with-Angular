import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userIndex, UserRegister } from './interface';
import { Observable, throwError, tap } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase = "https://reseau.jdedev.fr/api/user"
  handleError: any = '';

  urlArticle = "https://reseau.jdedev.fr/api"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  connectUser(login: userIndex) {
    return this.http.post/* <RetLogin> */(this.urlBase + "/connect", login, this.httpOptions)
      .pipe(
        tap(data =>
          data
        ),
        /* catchError(this.handleError) */
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

  listArticle(token: string) {
    return this.http.post/* <RetLogin> */(this.urlArticle + "", token, this.httpOptions)
      .pipe(
        tap(data =>
          data
        ),
        catchError(this.handleError)
      )
  }

  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get/* <Config> */(this.configUrl);
  }
}
