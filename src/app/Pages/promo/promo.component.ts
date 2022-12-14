import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Models/produit';
import { ProduitsService } from 'src/app/Shared/produit.service';
import { ProductdialogComponent } from '../produits/productdialog/productdialog.component';
import { DetailProduitComponent } from '../produits/detail-produit/detail-produit.component';
import { MatDialog } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  imagesUrl = environment.imagesUrl
  public produits: Produit[] = [];
  public selectedProduct: any;
  showDataOfChildComponent:any;
  private lien = environment.imagesUrl;
  constructor(private prodservice: ProduitsService,
              public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getProduitsPromo();
  }

  proceedRegister(){
    
  }

  
  prixPromo(x:number,y:number){
    return (x - (x*y/100));
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
     
  openDialogDet(row:any,action:string){
     const dialogRef = this.dialog.open(DetailProduitComponent,{width:'50%',height: '500px',
     enterAnimationDuration:'1000ms',
     exitAnimationDuration: '2000ms',
     data:{
      id:row.id,
      nom: row.nom,
      prix: row.prix,
      photo: row.photo,
      description: row.description,
      soldePromo:row.soldePromo,
      action:action
     }
     }); 
         
     dialogRef.afterClosed().subscribe(result => {
      this.showDataOfChildComponent = result;
      console.log('here is the data result', result)
    });  
 
}
  
}