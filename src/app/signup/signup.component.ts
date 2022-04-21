import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css'],
})
export class SignupComponent implements OnInit {
  title = 'coursAngular';

  constructor() { }

  ngOnInit(): void {
  }

  nom: string = "";
  prenom: string = "";
  email: string = "";
  pass: string = "";

  ajouter() {

    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.email);
    console.log(this.pass);

    this.nom = ""
    this.prenom = ""
    this.email = ""
    this.pass = ""

  }
}
