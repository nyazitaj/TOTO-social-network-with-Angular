import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseServer } from '../interface';
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

  email: string = "";
  password: string = ""
  urlBase = "localhost:4200"
  myToken: string = ''

  // Loggin a user and redirecting it to the articles list
  ngConnect() {
    this.userService.connectUser({

      email: this.email,
      password: this.password

    }).subscribe({

      next: results  => {
        results

        if (results.email != '' && results.token != '') {
          this.router.navigate(['/articles']);
        }
      }
    })

   /*  if (this.userService.isConnected() == true) {
      this.myToken = this.userService.myToken
    } */
  }

}
