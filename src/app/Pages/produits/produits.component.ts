import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Categorie } from 'src/app/Models/categorie';
import { Marque } from 'src/app/Models/marque';
import { PromoProd } from 'src/app/Models/promo_prod';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/Models/produit';

import { ProduitsService } from 'src/app/Shared/produit.service';
import { PventeService } from 'src/app/Shared/pvente.service';
import { GerantService } from 'src/app/Shared/gerant.service';
import { MarqueService } from 'src/app/Shared/marque.service';
import { CategorieService } from 'src/app/Shared/categorie.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Stock } from 'src/app/Models/stock';
import { MatDialog } from '@angular/material/dialog';
import { AddProduitComponent } from './add-produit/add-produit.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
    Id:number=0;
    Nom: string='';
    Prix: number =0;
    Photo: string='';
    Nouveaute: string='';
    Description: string='';
    CategorieId: number=0;
    Categorie: Categorie = new Categorie; 
    MarqueId: number=0;
    Marque: Marque = new Marque;    
    PromoProds:PromoProd[] = [];
    /* @ViewChild(TabprodComponent, { static: false }) tabprod: any;
    @ViewChild(TabprodComponent, { static: false }) */
        selectedProduct: Produit = new Produit;
  constructor(
             private router:Router,
             private dialog: MatDialog,
             private prodservice: ProduitsService,
             private categservice: CategorieService,
             private marqueservice: MarqueService
             ){ }

  ngOnInit(): void {
    
  }
  
  
  gotoTransfertstockClick(): void{
    this.router.navigate(['transfertstocks']);
  }
  gotoAddproduitClick(): void{
    this.router.navigate(['produits/add-produit']);
  }

  gotoEditproduitClick(): void{
    this.router.navigate(['produits/edit-produit']);
  }
  
  openAddproduitClick(){
    
  }
}
