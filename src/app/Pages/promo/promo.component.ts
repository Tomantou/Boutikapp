import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Models/produit';
import { ProduitsService } from 'src/app/Shared/produit.service';
import { ProductdialogComponent } from '../produits/productdialog/productdialog.component';
import { DetailProduitComponent } from '../produits/detail-produit/detail-produit.component';
import { MatDialog } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  public produits: Produit[] = [];
  public selectedProduct: any;
  constructor(private prodservice: ProduitsService,
              public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getProduitsPromo();
  }

  
  

  getProduitsPromo(){
    this.prodservice.getTenProduits().subscribe({
      next: (result) => {this.produits = result;
             console.log(this.produits);
      },
      error:(err) =>{console.log('erreur');        
      },
      
    });
  }
       
  openDetailprodDialog(enteranimation:any,exitanimation:any,prod:any){

    this.dialog.open(DetailProduitComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:'50%'
    })
  }
}