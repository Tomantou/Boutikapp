
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boutikapp';

  constructor(private router:Router) { }
  
  opened = false;
  

  gotoProduitClick(): void{
    
    this.router.navigate(['produits']);
 }

 gotoMarqueClick(): void{
  this.router.navigate(['marques']);
}

  gotoCategorieClick(): void{
    this.router.navigate(['categories']);
 }

 gotoClientClick(): void{
  this.router.navigate(['clients']);
}

gotoCommandeClick(): void{
  this.router.navigate(['gescommandes']);
}

gotoFactureClick(): void{
  this.router.navigate(['gesfacture']);
}

gotoFournisseurClick(): void{
  this.router.navigate(['gesfournisseur']);
}

gotoGerantClick(): void{
  this.router.navigate(['gesgerant']);
}

gotoNewsClick(): void{
  this.router.navigate(['gesNews']);
}

gotoPromotionClick(): void{
  this.router.navigate(['gespromo']);
}

gotoPventeClick(): void{
  this.router.navigate(['gespvente']);
}

gotoSignaletiqueClick(): void{
  this.router.navigate(['gessignaletique']);
}

  gotoStockClick(): void{
    this.router.navigate(['gesstock']);
 }

}
