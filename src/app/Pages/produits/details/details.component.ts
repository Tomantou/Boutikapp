import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { ProduitsService } from 'src/app/Shared/produit.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedProduct: any;
  constructor(private router:Router, 
    private produitservice: ProduitsService)
     { }

  ngOnInit(): void {
    this.selectedProduct  = new Produit;
  }

  getProduit(id: number){
    //this.selectedProduct = this.lesproduits.find(p => p.id == id);
    console.log(this.selectedProduct);
  }

}
