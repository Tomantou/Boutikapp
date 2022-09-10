import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  total: number;
  adresselivraison: string;
  statut: string;
  client: string;
  pvente: string;
  
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '10-09-2022', total:  2300, adresselivraison: 'Rue du bon berger', statut:'T',client: 'Jaddy', pvente:'Waterloo'},
  
];

@Component({
  selector: 'app-tabcommande',
  templateUrl: './tabcommande.component.html',
  styleUrls: ['./tabcommande.component.css']
})
export class TabcommandeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['date', 'total', 'adresselivraison', 'statut', 'client', 'pvente'];
  dataSource = ELEMENT_DATA;

}
