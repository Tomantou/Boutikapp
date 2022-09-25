import { Component, Inject, OnInit } from '@angular/core';
import { AddProduitComponent } from '../../produits/add-produit/add-produit.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewsComponent } from '../add-news/add-news.component';
import { ThenewsService } from 'src/app/Shared/thenews.service';
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
  selector: 'app-tablenews',
  templateUrl: './tablenews.component.html',
  styleUrls: ['./tablenews.component.css']
})
export class TablenewsComponent implements OnInit {

  constructor(public dialog:MatDialog,
              private thenewsservice: ThenewsService,
              ) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['titre', 'soustitre', 'texte', 'image', 'datepublication', 'publier'];
  dataSource = ELEMENT_DATA;


  openAddNewsDialog(){
    let dialogRef= this.dialog.open(AddNewsComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }
}
