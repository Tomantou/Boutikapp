import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/Models/categorie';
import { Marque } from 'src/app/Models/marque';
import { CategorieService } from 'src/app/Shared/categorie.service';
import { MarqueService } from 'src/app/Shared/marque.service';
import { ProduitsService } from 'src/app/Shared/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  public Categories : Categorie[] = [];
  public Marques:Marque [] = [];
  public selectedCategorie: Categorie = new Categorie;
  public selectedMarque: Marque = new Marque;

  Nom = new FormControl;
  Prix = new FormControl;
  photo = new FormControl;
  //logo: File | undefined;
  Nouveaute = new FormControl;
  // Navigation properthies
  CategorieId = new FormControl;
  MarqueId = new FormControl;
  description = new FormControl;
  prodid = 0;
  constructor(
    private router:Router,
    private prodservice: ProduitsService,
    private categorieservice: CategorieService,
    private marqueservice: MarqueService
    ) { }

  ngOnInit(): void {

    this.categorieservice.getCategories().subscribe(categories => {
      this.Categories = categories;
      console.log(this.Categories);
      this.selectedCategorie = this.Categories[1];
      console.log(this.selectedCategorie);
    })

    this.marqueservice.getMarques().subscribe(marques => {
      this.Marques = marques;
      console.log(this.Marques);
      this.selectedMarque = this.Marques[1];
      console.log(this.selectedMarque);
    })
    
  }
  

  public create() {
    this.prodservice.createProduct(
     {
       "Nom": this.Nom.value,
       "Prix": this.Prix.value,
       "Nouveaute": this.Nouveaute.value,
       "CategorieId": this.CategorieId.value,
       "MarqueId": this.MarqueId.value,
       "Description": this.description,
     }
    ).subscribe(result => {
     console.log('produt enreh')
     this.prodid = result.id;
     console.log(this.prodid)
     
   //   if (this.prodid && this.logo) {
   //     this.prodservice.updateImage(this.logo, this.prodid).subscribe(
   //         result => {
   //         },
   //         error => {
   //             if (error.status === 413) {
   //               console.log("Picture too large");
   //             } else {
   //               console.log("Error adding Picture");
   //             }
   //         });
   // }
    });
   }
 
   gotoProduitClick(): void{
    
    this.router.navigate(['produits']);
 }
  

}
