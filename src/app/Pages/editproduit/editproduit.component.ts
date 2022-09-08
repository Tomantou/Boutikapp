import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Marque } from 'src/app/Models/marque';
import { PromoProd } from 'src/app/Models/promo_prod';
import { Stock } from 'src/app/Models/stock';
import { Categorie } from 'src/app/Models/categorie';

@Component({
  selector: 'app-editproduit',
  templateUrl: './editproduit.component.html',
  styleUrls: ['./editproduit.component.css']
})
export class EditproduitComponent implements OnInit {
    Nom = new FormControl;
    Prix = new FormControl;
    Photo = new FormControl;
    Nouveaute = new FormControl;
    // Navigation properthies
    CategorieId = new FormControl;
    MarqueId = new FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
