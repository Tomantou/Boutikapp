import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nom: string;
  origine: string;
  
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nom: 'HP', origine: 'USA'},
  
];

@Component({
  selector: 'app-tabmarque',
  templateUrl: './tabmarque.component.html',
  styleUrls: ['./tabmarque.component.css']
})
export class TabmarqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['nom','origine'];
  dataSource = ELEMENT_DATA;
  

}
