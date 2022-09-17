import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { ProduitsService } from 'src/app/Shared/produit.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  public produit: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private produitservice: ProduitsService,
    ) { }

  ngOnInit(): void {
    this.produit = new Produit();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduit(id);
  }

  public getProduit(id: number): void {
    this.produitservice.getProductById(id).subscribe((produit) => {
      this.produit = produit;
    });
  }

  public updateProduit() {
    this.produitservice
      .updateProduct(this.produit.Id, this.produit)
      .subscribe();
    
  }

  gotoPageProduits() {
    const lien = ['produits'];
    this.router.navigate(lien);
  }

  gotoProduitClick(): void{
    
    this.router.navigate(['produits']);
 }

}
