import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/Models/produit';
import { Marque } from 'src/app/Models/marque';
import { Categorie } from 'src/app/Models/categorie';
import { ProduitsService } from 'src/app/Shared/produit.service';
import { ConfigdataService } from 'src/app/Shared/configdata.service';
import { PventeService } from 'src/app/Shared/pvente.service';
import { MarqueService } from 'src/app/Shared/marque.service';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Configdata } from 'src/app/Models/configdata';
import { DetailProduitComponent } from '../produits/detail-produit/detail-produit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { BottompventesComponent } from '../bottompventes/bottompventes.component';
import { author, title } from 'src/app/global-variables';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pvente } from 'src/app/Models/pvente';
import { PanierService } from 'src/app/Shared/panier.service';
import { Paniers } from 'src/app/Models/Paniers';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [ProduitsService]
})
export class AccueilComponent implements OnInit {
  prodfound:any;
  // @Input() image: string
  public lesproduits: Produit[] = [];
  public les10prod: Produit[] = [];
  public les10randprod: Produit[] = [];
  public configdatas: Configdata[] = [];
  public panier: Produit[] = [];
  lesPventes: Pvente[] = [];
  public selectedProduct: any;
  showDataOfChildComponent:any;
  public selectedConfigdata: Configdata = new Configdata;
  imagesUrl = environment.imagesUrl;
 private link = ['accueil'];
  p: number = 1;
  useremail:any;
  userrole:any;
  userid:string;
  
  public boutiqueContainer = environment.boutiqueContainer;
  dataSource: any;

  constructor(private router:Router, 
    private produitservice: ProduitsService,
    private pventeservice:PventeService,
    private panierService:PanierService,
    private configdataservice: ConfigdataService,
    private dialog: MatDialog,
    ) { }

    opened = true;
    title = 'NCL *  Nutri-Cosmétique en Ligne';
  toggleSidebar(){
    this.opened = !this.opened; 
   }

  ngOnInit(): void {
    this.useremail = localStorage.getItem('email');
    this.userid = localStorage.getItem('userid')!;
    this.userrole = localStorage.getItem('role');
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

          this.pventeservice.getPventes().subscribe(
            (pventes) => {this.lesPventes= pventes;
             
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

    loadProduit(produit:Produit){
      this.produitservice.produit = Object.assign({},produit);
     // console.log('product loaded',produit);
    }
    gotoPageContact(){
     const lien = ['contact'];
     this.router.navigate(lien);  
   }
   
    getProduit(id: number){
     this.selectedProduct = this.lesproduits.find(p => p.id == id);
     console.log('selected',this.selectedProduct);  
   } 

   getProduit2(id: number){
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

    openDialogDet(row:any,action:string){
      this.selectedProduct=row;
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
    
public addPanier(prod: Produit) {
  let panier = new Paniers();
  panier.Prix = prod.prix;
  panier.Solde = prod.soldePromo;
  panier.ProduitId = prod.id!;
  panier.Quantite = 1;
  panier.UserId = Number(this.userid);
  this.panierService.create(panier).subscribe(response => console.debug("added panier"));
}
    

}