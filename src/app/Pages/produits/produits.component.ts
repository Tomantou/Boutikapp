import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Categorie } from 'src/app/Models/categorie';
import { Marque } from 'src/app/Models/marque';
import { PromoProd } from 'src/app/Models/promo_prod';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
    Nom: String='';
    Photo: String='';
    Nouveaute: string='';
    // Navigation properthies
    CategorieId: number=0;
    Categorie: Categorie = new Categorie; 
    MarqueId: number=0;
    Marque: Marque = new Marque;    
    PromoProds:PromoProd[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  


}
