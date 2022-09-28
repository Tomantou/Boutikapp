import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/Models/produit';
import { Marque } from 'src/app/Models/marque';
import { Categorie } from 'src/app/Models/categorie';
import { ProduitsService } from 'src/app/Shared/produit.service';
import { ConfigdataService } from 'src/app/Shared/configdata.service';
import { MarqueService } from 'src/app/Shared/marque.service';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Configdata } from 'src/app/Models/configdata';
import { DetailProduitComponent } from '../produits/detail-produit/detail-produit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { BottompventesComponent } from '../bottompventes/bottompventes.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [ProduitsService]
})
export class AccueilComponent implements OnInit {
  // @Input() image: string
  public lesproduits: Produit[] = [];
  public les10prod: Produit[] = [];
  public les10randprod: Produit[] = [];
  public configdatas: Configdata[] = [];
  public panier: Produit[] = [];
  public selectedProduct: any;
  public selectedConfigdata: Configdata = new Configdata;
 private link = ['accueil'];
  p: number = 1;
  
  public boutiqueContainer = environment.boutiqueContainer;

  constructor(private router:Router, 
    private produitservice: ProduitsService,
    private configdataservice: ConfigdataService,
    private dialog: MatDialog,
    ) { }

    opened = true;
    title = 'NCL *  Nutri-Cosmétique en Ligne';
  toggleSidebar(){
    this.opened = !this.opened; 
   }

  ngOnInit(): void {
    this.toggleSidebar();
    //this.selectedSignal =  localStorage.getItem['signaletique'];
    // this.image = this.selectedSignal.logo;
    this.selectedProduct  = new Produit;
    this.produitservice.getProduits().subscribe(
      (produits) => {this.lesproduits=produits;
       console.log('liste produits',this.lesproduits);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  

      this.produitservice.getTenProduits().subscribe(
        (prod10) => {this.les10prod=prod10;
         console.log('les 10 produits',this.les10prod);
        },
        (error) => {
           alert('probleme d\'acces a l api');
        }
        );  

        this.produitservice.getTenRandomProduits().subscribe(
          (rand10prod) => {this.les10randprod = rand10prod;
           console.log('les 10 produits randomisés',this.les10randprod);
          },
          (error) => {
             alert('probleme d\'acces a l api');
          }
          );  



     /*  this.configdataservice.getSignaletique().subscribe(
        (configdatas) => {this.configdatas = configdatas;
        console.log('liste signaletiques',this.signaletics);
        },
        (error) => {
           alert('probleme d\'acces a l api categories');
        }
      );  */
      
    } 
   
    gotoPageContact(){
     const lien = ['contact'];
     this.router.navigate(lien);  
   }
   
   /* getProduit(id: number){
     this.selectedProduct = this.lesproduits.find(p => p.id == id);
     console.log(this.selectedProduct);  
   } */

   getProduit(id: number){
    this.produitservice.getProductById(id).subscribe({
        next: (result) =>{this.selectedProduct =result;
          console.log(this.selectedProduct);
        },
        error(err) { console.log('produit non trouvé');
          
        },
    });
     
      
  }
   
   getSignal(tva: number){
     // tva = localStorage.getItem['lelogo'].value;
     //this.selectedConfigdata = this.configdatas.find(c => c.Tva ==tva);
     console.log(this.selectedConfigdata);
   }
   
  
   /* openDetailprodDialog(){
    let dialogRef = this.dialog.open(DetailProduitComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });    
  
    } */

    openDetailprodDialog(enteranimation:any,exitanimation:any,idprod:any){

      this.dialog.open(DetailProduitComponent,{
        enterAnimationDuration:enteranimation,
        exitAnimationDuration:exitanimation,
        width:'50%'
      })
    /* let dialogRef = this.dialog.open(DetailProduitComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });  */
     
  }


}