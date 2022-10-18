import { Component, OnInit } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Paniers } from 'src/app/Models/Paniers';
import { Produit } from 'src/app/Models/produit';
import { EmailDto } from 'src/app/Models/EmailDto';
import { PayerComponent } from '../payer/payer.component';
import { PanierService } from 'src/app/Shared/panier.service';
import { CommandeclService } from 'src/app/Shared/commandecl.service';
import { EmailService } from 'src/app/Shared/email.service';
import { Commandecl } from 'src/app/Models/commandecl';
import { environment } from 'src/environments/environment';
import * as alertifyjs from 'alertifyjs';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  email: EmailDto = new EmailDto;
  userid:number;
  commande: Commandecl;
  produits : any[] = [];
  montantHt=0;
  montantTtc=0;
  numeroCmde=0;
  public total = 0;
  imagesUrl = environment.imagesUrl;
 

  constructor(private panierSerivce: PanierService,
              private route:Router,
              private emailservice:EmailService,
              private cmdclservice:CommandeclService) { }

  ngOnInit(): void {
    this.refresh();
    this.commande= new Commandecl;
    //this.userid= Number.parseInt(localStorage.getItem("userid"));
    //console.log('produits paniers',this.produits);

}

public refreshTotalPrix() {
  this.total = 0;
  this.produits.forEach((produit) => {
    this.total += produit.prix * produit.solde / 100 * produit.quantite;
  });
  this.montantHt = this.total;
  this.montantTtc = this.montantHt * 1.21;
  console.log('TOTAL',this.total);
  return this.total;

}

public confirm() {
  this.panierSerivce.confirm(localStorage.getItem("userid")!).subscribe(response => this.refresh());
}
public cancel() {
  this.panierSerivce.cancel(localStorage.getItem("userid")!).subscribe(response => this.refresh());
}
public delete(id : string) {
  this.panierSerivce.delete(id).subscribe(response => this.refresh())
}
  public add(id : string) {
    this.panierSerivce.add(id).subscribe(response => {
      if (response) {
        this.refresh();
      } else {
        console.log("nope");
      }
      })
  }
  public decrease(id : string) {
    this.panierSerivce.decrease(id).subscribe(response => this.refresh())
  }

  private refresh() {
    this.panierSerivce.getPaniers(localStorage.getItem("userid")!).subscribe(
      response => this.produits = response
    );
    this.refreshTotalPrix();
  }

  resetPanier(){
   this.produits.forEach((produit) => {
      this.panierSerivce.delete(produit.id);
  }); 

  }

  

  gotoAccuelClick(){
    alertifyjs.success('Transaction abandonnée!');
    this.route.navigate(['accueil']);
  }

  gotoPayerClick(): void{
    this.route.navigate(['payer']);
  }
 
  envoieMail(){
    this.numeroCmde = Math.round(Math.random() * (3000 - 100) + 100);
    this.email.To ='dewitt.goldner@ethereal.email';
    this.email.Subject='Commande N° '+ this.numeroCmde;
    this.email.Body='Félicitations! <br> Votre commande a bien été enregistrée' +
               ' le montant total est de '+ this.total+' Euro <br>'+
                'Vous trouverrez dans la pièce jointe les détails'+
                'Merci de confiance <br><br>'+
                 'Equipe de BOUTIKLine';
      console.log('to',this.email.To);  
      console.log('subject',this.email.Subject);
      console.log('body',this.email.Body);     
      this.emailservice.emailSend(this.email).subscribe();

  }

  creerCommande(){
    this.commande.date = new Date;
    this.commande.Statut ="N";
    //this.commande.UserId = (localStorage.getItem("userid"))!;
    this.commande.Adresselivraison = "à preciser";
    this.commande.Total= this.total;
    this.commande.date = new Date;
    console.log('objet commande:',this.commande);
    this.numeroCmde = Math.round(Math.random() * (3000 - 100) + 100);
    this.cmdclservice.createCommande(this.commande).subscribe((donnee:any)=>{
      ;
    });

  }


  
}
