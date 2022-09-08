import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [ProduitsService]
})
export class AccueilComponent implements OnInit {
  // @Input() image: string
  lesproduits: Produit[] = [];
  public configdatas: Configdata[] = [];
  panier: Produit[] = [];
  selectedProduct: Produit = new Produit;
  selectedConfigdata: Configdata = new Configdata;
 private link = ['accueil'];
  p: number = 1;
  
  public boutiqueContainer = environment.boutiqueContainer;

  constructor(private router:Router, 
    private produitservice: ProduitsService,
    private configdataservice: ConfigdataService) { }

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
      // console.log('liste produits',this.lesproduits);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  

      this.configdataservice.getSignaletique().subscribe(
        (configdatas) => {this.configdatas = configdatas;
        // console.log('liste signaletiques',this.signaletics);
        },
        (error) => {
           alert('probleme d\'acces a l api categories');
        }
      ); 
      
    } 
   
    gotoPageContact(){
     const lien = ['contact'];
     this.router.navigate(lien);  
   }
   
   getProduit(id: number){
     //this.selectedProduct = this.lesproduits.find(p => p.Id == id);
     console.log(this.selectedProduct);
   }
   
   getSignal(tva: number){
     // tva = localStorage.getItem['lelogo'].value;
     //this.selectedConfigdata = this.configdatas.find(c => c.Tva ==tva);
     console.log(this.selectedConfigdata);
   }
   
     
  

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


  
}


