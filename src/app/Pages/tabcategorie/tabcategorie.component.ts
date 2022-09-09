import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  libelle: string;
  
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, libelle: 'Impression'},
  {id: 2, libelle: 'Electro menager'},
  {id: 3, libelle: 'Sport'},
  
];


@Component({
  selector: 'app-tabcategorie',
  templateUrl: './tabcategorie.component.html',
  styleUrls: ['./tabcategorie.component.css']
})
export class TabcategorieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id','libelle'];
  dataSource = ELEMENT_DATA;

}
