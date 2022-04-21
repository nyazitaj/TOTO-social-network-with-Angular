import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.css'],
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: string[] = []

  tab: any = [];

  arrayTemp: any = {};
  nom: string = "";
  prenom: string = "";
  email: string = "";
  tel: string = "";

  envoyer() {
    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.email);
    console.log(this.tel);

    this.nom = ""
    this.prenom = ""
    this.email = ""
    this.tel = ""

  }

}
