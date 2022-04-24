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


    /* console.log(
      this.userService.userList
    ); */

    // this.data = this.userService.data

    /* this.userService.listUsers('token').subscribe({
      next: result => {
        console.log(result)
      }
    }); */


    // this.http.get(this.urlBase + 'article', this.httpOptions)
    //   .subscribe(res => {
    //     // console.log(res)
    //     this.articleList = res
    //   });

    // this.userService.getArticleList()
    // this.articleList = this.userService.articleList
    // console.log(this.articleList)

    /* this.userService.articleList.forEach((element: any) => {
      console.log(element);
    }); */


    /* console.log(
      this.userService.articleList
    ); */

    /* console.log(
      this.userService.makeFullArray(
        this.userService.articleList
      )
    ); */



    /* console.log(
      this.userService.getArticleList()
    ) */



    // Getting the comments list at the loading
    // this.http.get(this.urlBase + 'comment', this.httpOptions)
    //   .subscribe(res => {
    //     // console.log(res)
    //     this.commentList = res
    //   });

    // console.log(this.commentList);

    // console.log(this.makeFullArray(this.userService.articleList))

  }

  // pseudo: string = "";
  // email: string = "";
  // password: string = "";
  // avatar: string = "";
  // result: any = []

  // titre: string = "Coucou";
  // contenu: string = "Kiki"

  // email: string = "nyazitaj@yahoo.fr";
  // password: string = "Password!"
  // urlBase = "localhost:4200"

  // // Loggin a user and redirecting it to the users list
  // ngConnect() {
  //   this.userService.connectUser({

  //     email: this.email,
  //     password: this.password

  //   }).subscribe({

  //     next: results  => {
  //       results

  //       if (results.email != '' && results.token != '') {
  //         this.router.navigate(['/users']);
  //       }
  //     }
  //   })
  // }

  // ajouterArticle() {
  //   this.userService.addArticle({
  //     titre: this.titre,
  //     contenu: this.contenu
  //   })
  // }


  /* Users */

  getSingleUser(id: number) {
    this.userService.currentUserData = this.userService.getSingleUser(id)
    this.router.navigate(['user-profile']);

    this.userService.currentUserArticles = this.userService.articleList
    this.router.navigate(['user-profile']);

    this.userService.currentUserComments = this.userService.commentList
    this.router.navigate(['user-profile']);

    /* console.log(
      this.userService.getSingleUser(id)
    ) */
  }

}
