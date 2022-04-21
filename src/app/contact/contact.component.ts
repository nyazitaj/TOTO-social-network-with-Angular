import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
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
