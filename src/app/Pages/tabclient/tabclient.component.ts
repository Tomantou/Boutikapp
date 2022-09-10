import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nom: string;
  prenom: string;
  adresse: string;
  contact: string;
  email: string;
  codepostal: string;
  ville: string;
  civilite: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nom: 'Morgan', prenom: 'Antoine', adresse: 'Rue du bon berger', contact:'0489456532', email: 'mogan@yahoo.be', codepostal:'1410',ville:'Waterloo', civilite:'Mr'},
  
];

@Component({
  selector: 'app-tabclient',
  templateUrl: './tabclient.component.html',
  styleUrls: ['./tabclient.component.css']
})
export class TabclientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['nom', 'prenom', 'adresse', 'contact', 'email', 'codepostal','ville','civilite'];
  dataSource = ELEMENT_DATA;

}
