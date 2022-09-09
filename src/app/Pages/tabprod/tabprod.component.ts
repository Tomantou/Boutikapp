import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nom: string;
  prix: number;
  photo: string;
  description: string;
  
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nom: 'HP305', prix: 35, photo: '1.jpg', description: 'Cartouche HP 305'},
  {nom: 'HP305', prix: 35, photo: '1.jpg', description: 'Cartouche HP 305'},
  {nom: 'HP305', prix: 35, photo: '1.jpg', description: 'Cartouche HP 305'},
];

@Component({
  selector: 'app-tabprod',
  templateUrl: './tabprod.component.html',
  styleUrls: ['./tabprod.component.css']
})
export class TabprodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['nom', 'prix', 'photo', 'description'];
  dataSource = ELEMENT_DATA;
  
stateSpinner = false;

  showSpinner(){
    this.stateSpinner = true;
    setTimeout(() => {
      this.stateSpinner = false;
    }, 5000);
  }
  

}
