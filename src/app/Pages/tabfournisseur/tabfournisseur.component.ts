import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  nom: string;
  adresse: string;
  contact: string;
  email: string;
  
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nom: 'Morgan', adresse: 'Rue du bon berger', contact:'0489456532', email: 'mogan@yahoo.be'},
  
];

@Component({
  selector: 'app-tabfournisseur',
  templateUrl: './tabfournisseur.component.html',
  styleUrls: ['./tabfournisseur.component.css']
})
export class TabfournisseurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['nom','adresse', 'contact', 'email'];
  dataSource = ELEMENT_DATA;

}
