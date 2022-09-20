import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';

@Component({
  selector: 'app-proddetail',
  templateUrl: './proddetail.component.html',
  styleUrls: ['./proddetail.component.css']
})
export class ProddetailComponent implements OnInit {
   @Input()  selectedProduct: Produit = new Produit;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  gotoAccueilClick(): void{
    
    this.router.navigate(['accueil']);
 }

}
