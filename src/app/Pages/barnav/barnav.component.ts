import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barnav',
  templateUrl: './barnav.component.html',
  styleUrls: ['./barnav.component.css']
})
export class BarnavComponent implements OnInit {
role="";
useremail="";
userrole="";
  

  constructor(private router:Router) {
   
  }
  

  ngOnInit(): void {
    this.userrole= localStorage.getItem('role')!;
  }
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

gotoGerernewsClick(): void{
  this.router.navigate(['gerernews']);
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

 gotoTransfertstockClick(): void{
  this.router.navigate(['transfertstocks']);
}

gotoSigninClick(): void{
  this.router.navigate(['signin']);
}

logout(){
  localStorage.clear();
  window.open('/login', "_self");
}

}
