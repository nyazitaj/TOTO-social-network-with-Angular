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

  result: any = []

  ngConnect() {
    // console.log(this.logForm.value)
    // this.userService.connection(this.email, this.pass)

    this.result = this.userService.connectUser({ email: this.email, password: this.password }).subscribe(/* {
      next: result => {
        this.result = result
      }
    } */)
    /* console.log(
      this.result
    ) */

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
