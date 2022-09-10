import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/Models/categorie';

export interface PeriodicElement {
  categorie:string;
  nom: string;
  prenom: string;
  contact: string;
  email: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {categorie:'E', nom: 'MOUGA', prenom: 'AISSATOU', contact:'0489456532', email: 'aissat@yahoo.be'},
  
];

@Component({
  selector: 'app-tabgerant',
  templateUrl: './tabgerant.component.html',
  styleUrls: ['./tabgerant.component.css']
})
export class TabgerantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['categorie','nom','prenom', 'contact', 'email'];
  dataSource = ELEMENT_DATA;


}
