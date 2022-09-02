import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barnav',
  templateUrl: './barnav.component.html',
  styleUrls: ['./barnav.component.css']
})
export class BarnavComponent implements OnInit {

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
  this.router.navigate(['commandecl']);
}

gotoCommandefournClick(): void{
  this.router.navigate(['commandefourn']);
}
gotoFactureClick(): void{
  this.router.navigate(['factures']);
}

gotoFournisseurClick(): void{
  this.router.navigate(['fournisseurs']);
}

gotoGerantClick(): void{
  this.router.navigate(['gerants']);
}

gotoNewsClick(): void{
  this.router.navigate(['News']);
}

gotoPromotionClick(): void{
  this.router.navigate(['promotions']);
}

gotoPromoClick(): void{
  this.router.navigate(['promo']);
}

gotoPventeClick(): void{
  this.router.navigate(['pventes']);
}

gotoConfigdataClick(): void{
  this.router.navigate(['configdata']);
}

  gotoStockClick(): void{
    this.router.navigate(['stocks']);
 }

 gotoTransferstockClick(): void{
  this.router.navigate(['transferstocks']);
}

gotoSigninClick(): void{
  this.router.navigate(['signin']);
}

  ngOnInit(): void {
  }

}
