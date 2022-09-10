import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  titre: string;
  soustitre: string;
  texte: string;
  image: string;
  datepublication: string;
  publier:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {titre: 'Nouveau routeur', soustitre: 'routeur', texte: 'Nouvelles génération', image: '2.jpg', datepublication:'12.02.22',publier:'Oui'},
  {titre: 'Nouveau routeur', soustitre: 'routeur', texte: 'Nouvelles génération', image: '2.jpg', datepublication:'12.02.22',publier:'Oui'},
  
];

@Component({
  selector: 'app-tabnews',
  templateUrl: './tabnews.component.html',
  styleUrls: ['./tabnews.component.css']
})
export class TabnewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['titre', 'soustitre', 'texte', 'image', 'datepublication', 'publier'];
  dataSource = ELEMENT_DATA;
}
