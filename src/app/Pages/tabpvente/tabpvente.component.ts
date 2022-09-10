import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  adresse:string;
  contact: string;
  email: string;
  codepostal: string;
  ville: string;
  gerant: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {adresse:'Rue du marchand 23', contact:'0489456532', email: 'aissat@yahoo.be',codepostal: '1420',ville:'Braine l Alleud',gerant:'Germain'},
  
];

@Component({
  selector: 'app-tabpvente',
  templateUrl: './tabpvente.component.html',
  styleUrls: ['./tabpvente.component.css']
})
export class TabpventeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['adresse','contact', 'email','codepostal', 'ville','gerant'];
  dataSource = ELEMENT_DATA;

}
