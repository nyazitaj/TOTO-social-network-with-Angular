import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from '../user.service'

@Component({
  selector: 'app-root',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css'],
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  pseudo: string = ""
  email: string = ""
  password: string = ""
  avatar: string = "";


  // Registering a user and redirecting it to the articles list
  registerUser() {
    this.userService.signupUser({

      pseudo: this.pseudo,
      email: this.email,
      password: this.password,
      avatar: this.avatar

    }).subscribe({

      next: results => {
        /* console.log(results) */

        if (results.email != '' && results.token != '') {
          this.router.navigate(['/']);
        }
      }

    })
  }

}
