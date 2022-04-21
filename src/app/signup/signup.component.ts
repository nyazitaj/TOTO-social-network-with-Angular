import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  title = 'coursAngular';

  tab: any = [
    /* {
      nom: "Doe",
      prenom: "John",
      age: 24
    },
    {
      nom: "Monstre",
      prenom: "Anabelle",
      age: 37
    },
    {
      nom: "Van",
      prenom: "Helsing",
      age: 37
    }, */
  ];

  constructor() {}

  ngOnInit(): void {
  }

  items: string[] = []

  arrayTemp: any = {};
  nom: string = "";
  prenom: string = "";
  email: string = "";
  tel: string = "";

  ajouter() {
    this.arrayTemp.nom = this.nom;
    this.arrayTemp.prenom = this.prenom;
    this.arrayTemp.email = this.email;
    this.arrayTemp.tel = this.tel;

    this.tab.push(this.arrayTemp);

    this.nom = ""
    this.prenom = ""
    this.email = ""
    this.tel = ""

  }
}
