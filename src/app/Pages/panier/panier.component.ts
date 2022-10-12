import { Component, OnInit } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY } from '@angular/material/tooltip';
import { PanierService } from 'src/app/Shared/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  produits : any[] = [];
  montantHt=0;
  montantTtc=0;
  total = 0;

  constructor(private panierSerivce: PanierService) { }

  ngOnInit(): void {
    this.refresh();
    
    console.log('produits paniers',this.produits);

}

public refreshTotalPrix() {
  this.total = 0;
  this.produits.forEach((produit) => {
    this.total += produit.prix;
  });
  this.montantHt = this.total;
  this.montantTtc = this.montantHt * 1.21;
  console.log('TOTAL',this.total);
  return this.total;

}

  public add(id : string) {
    this.panierSerivce.add(id).subscribe(response => this.refresh())
  }
  public decrease(id : string) {
    this.panierSerivce.decrease(id).subscribe(response => this.refresh())
  }

  private refresh() {
    this.panierSerivce.getPaniers(localStorage.getItem("userid")!).subscribe(
      response => this.produits = response
    );
  }

  
}
