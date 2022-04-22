import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './articles.component.html',
  styleUrls: ['../app.component.css'],
})
export class ArticlesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  data: any = []


  ngOnInit(): void {
    if (this.userService.myToken == '') {
      this.router.navigate(['']);
    }

    console.log(
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
    )

    this.data = this.userService.data

    /* this.userService.listUsers('token').subscribe({
      next: result => {
        console.log(result)
      }
    }); */
  }

  pseudo: string = "";
  email: string = "";
  password: string = "";
  avatar: string = "";
  result: any = []

  ajouter() {

    this.pseudo = ""
    this.email = ""
    this.password = ""
    this.avatar = ""

  }


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
}
