import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { articleList, UserLogin } from '../interface';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './articles.component.html',
  styleUrls: ['../app.component.css'],
})
export class ArticlesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private http: HttpClient) { }

  data: any = []
  urlBase = "https://reseau.jdedev.fr/api/"
  commentList: any = []
  fullArray: any = []
  articleList: any = []


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

    this.data = this.userService.data

    this.userService.getArticleList()
    this.userService.getCommentsList()
    this.articleList = this.userService.articleList
    console.log(this.articleList)


  }

  pseudo: string = "";
  email: string = "";
  password: string = "";
  avatar: string = "";
  result: any = []

  titre: string = "";
  contenu: string = ""
  commentaire: string = ""

  ajouterArticle() {
    this.userService.addArticle({
      titre: this.titre,
      contenu: this.contenu
    })
  }

  deleteArticle(id: number) {
    this.userService.deleteArticle(id)
  }
}
