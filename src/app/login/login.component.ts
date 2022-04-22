import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { userIndex } from '../interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  items: string[] = []

  email: string = "";
  pass: string = "";

  loginUser() {

    console.log(this.email);
    console.log(this.pass);

    this.email = ""
    this.pass = ""

  }

  password: string = ""


  /* logForm = this.formBuilder.group({
    login: '',
    pass: ''
  });

  ngConnect() {
    // console.log(this.logForm.value)
    this.userService.connection(this.logForm.value.login, this.logForm.value.pass)
  } */

  results: any = []
  urlBase = "localhost:4200"

  ngConnect() {
    // console.log(this.logForm.value)
    // this.userService.connection(this.email, this.pass)

    this.userService.connectUser({
      email: 'nyazitaj@yahoo.fr',
      password: 'Password!'
    }).subscribe({
      next: results => {
        this.results = []
        this.results.push(results)

        /* console.log(
          this.results
        ) */

        /* if (this.results[0].email != '' && this.results[0].token != '') {
          console.log('Everything is OK !')
          console.log(
            this.results[0].token
          )

          this.router.navigate(['/articles']).then(result=>{
            console.log(result);
          });
          // this.router.navigate.
        }
        else {
          console.log('Somethinkg went wrong')
          console.log(
            this.results[0].token
          )
        } */
      }
    })



    /* console.log(
      this.userService.getConfig()
    ) */
  }


  /* albums: any = [];
  constructor(private _albumService: AlbumService) { }
  ngOnInit() {
    this._albumService.getAllAlbums().subscribe({
      next: albums => {
        this.albums = albums
      }
    })
  } */
}
