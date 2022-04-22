import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { userIndex } from '../interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    /* console.log(
      this.userService.listArticle()
    ); */
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

  ngConnect() {
    // console.log(this.logForm.value)
    // this.userService.connection(this.email, this.pass)

    this.userService.connectUser({
      email: 'nyazitaj@yahoo.fr',
      password: 'Password!'
    }).subscribe({
      next: result => {
        this.results.push(result)
      }
    })

    
    console.log(
      this.results
    )

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
