import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  produit: string;
  quantite: number;
  quantitemin: number;
  quantitemax: number;
  pvente: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {produit: 'HP305', quantite: 25, quantitemin: 20, quantitemax: 30, pvente: 'Bruxelles'},
  {produit: 'HP305', quantite: 25, quantitemin: 20, quantitemax: 30, pvente: 'Waterloo'},
  
];


@Component({
  selector: 'app-tabstock',
  templateUrl: './tabstock.component.html',
  styleUrls: ['./tabstock.component.css']
})
export class TabstockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['produit', 'quantite','quantitemin','quantitemax', 'pvente'];
  dataSource = ELEMENT_DATA;

}
