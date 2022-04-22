import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { userIndex } from '../interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css'],
})
export class SignupComponent implements OnInit {
  title = 'coursAngular';

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  pseudo: string = "";
  email: string = "";
  password: string = "";
  avatar: string = "";

  ajouter() {

    console.log(this.pseudo);
    console.log(this.email);
    console.log(this.password);
    console.log(this.pseudo);

    this.pseudo = ""
    this.email = ""
    this.password = ""
    this.avatar = ""

  }



  result: any = []

  registerUser() {
    // console.log(this.logForm.value)
    // this.userService.connection(this.email, this.pass)

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
    /* console.log(
      this.result
    ) */

    /* console.log(
      this.userService.getConfig()
    ) */
  }
}
