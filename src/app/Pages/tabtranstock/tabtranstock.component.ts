import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  quantite: number;
  date: string;
  idstockdest: string;
  idstocksrc: string;
  pvente: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 3, quantite: 5, date: '20-09-2002', idstockdest: '117', idstocksrc: '27', pvente: 'Bruxelles'},
  
];

@Component({
  selector: 'app-tabtranstock',
  templateUrl: './tabtranstock.component.html',
  styleUrls: ['./tabtranstock.component.css']
})
export class TabtranstockComponent implements OnInit {


 

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'quantite','date','idstockdest','idstocksrc', 'pvente'];
  dataSource = ELEMENT_DATA;


}
