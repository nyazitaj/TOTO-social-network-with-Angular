import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../interface';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './articles.component.html',
  styleUrls: ['../app.component.css'],
})
export class ArticlesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private _httpClient: HttpClient) { }

  data: any = []


  _bookListUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=extreme%20programming';
  urlBase = "https://reseau.jdedev.fr/api/"
  bookCount: number = 0;
  bookList: any = [];

  ngOnInit(): void {
    if (this.userService.myToken == '') {
      this.router.navigate(['']);
    }

    /* console.log(
      this.userService.data
    )
    console.log(
      this.userService.id
    )
    console.log(
      this.userService.email
    )
    console.log(
      this.userService.myToken
    ) */

    this.data = this.userService.data

    /* this.userService.listUsers('token').subscribe({
      next: result => {
        console.log(result)
      }
    }); */


    /* console.log(
      this.userService.listArticle()
    );

    console.log(
      this.userService.articles
    ); */

    this._httpClient.get(this.urlBase + '/article')
      .subscribe(res => {

        // this.bookCount = res.totalItems;

        console.log(res)

        // @TODO: this.bookList = ...

      });
  }

  pseudo: string = "";
  email: string = "";
  password: string = "";
  avatar: string = "";
  result: any = []


  addArticle() {
    this.result = this.userService.signupUser({

      pseudo: this.pseudo,
      email: this.email,
      password: this.password,
      avatar: this.avatar

    }).subscribe({

      next: result => {
        console.log(result)
      }

    })
  }

  // email: string = "nyazitaj@yahoo.fr";
  // password: string = "Password!"
  // urlBase = "localhost:4200"

  // // Loggin a user and redirecting it to the articles list
  // ngConnect() {
  //   this.userService.connectUser({

  //     email: this.email,
  //     password: this.password

  //   }).subscribe({

  //     next: results  => {
  //       results

  //       if (results.email != '' && results.token != '') {
  //         this.router.navigate(['/articles']);
  //       }
  //     }
  //   })
  // }
}
