import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  gotoProduitClick(): void{
    
    this.router.navigate(['produits']);
 }
}
