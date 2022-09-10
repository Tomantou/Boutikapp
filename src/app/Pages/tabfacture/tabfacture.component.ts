import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id:number;
  date: string;
  statut: string;
  client: string;
 
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 112, date: '12.09.2022', statut:'P', client:'OYEM PATY'},
  
];

@Component({
  selector: 'app-tabfacture',
  templateUrl: './tabfacture.component.html',
  styleUrls: ['./tabfacture.component.css']
})
export class TabfactureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id','date', 'statut','client'];
  dataSource = ELEMENT_DATA;

}
