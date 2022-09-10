import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  libelle: string;
  datedebut: string;
  datefin: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {libelle: 'Promo été 2022', datedebut: '19/08/2022',datefin:'12/10/2022'}
  
];

@Component({
  selector: 'app-tabpromotion',
  templateUrl: './tabpromotion.component.html',
  styleUrls: ['./tabpromotion.component.css']
})
export class TabpromotionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['libelle', 'datedebut', 'datefin'];
  dataSource = ELEMENT_DATA;

}
