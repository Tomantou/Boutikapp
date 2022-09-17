import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Marque } from 'src/app/Models/marque';
import { PromoProd } from 'src/app/Models/promo_prod';
import { Stock } from 'src/app/Models/stock';
import { Categorie } from 'src/app/Models/categorie';
import { ProduitsService } from 'src/app/Shared/produit.service';

@Component({
  selector: 'app-editproduit',
  templateUrl: './editproduit.component.html',
  styleUrls: ['./editproduit.component.css']
})
export class EditproduitComponent implements OnInit {
    Nom = new FormControl;
    Prix = new FormControl;
    logo: File | undefined;
    Nouveaute = new FormControl;
    // Navigation properthies
    CategorieId = new FormControl;
    MarqueId = new FormControl;
    description = new FormControl;
    prodid = 0;
    

  constructor(private prodservice: ProduitsService) { }

  ngOnInit(): void {
  }

  public create() {
   this.prodservice.createProduct(
    {
      "Nom": this.Nom.value,
      "Prix": this.Prix.value,
      "Nouveaute": this.Nouveaute.value,
      "CategorieId": this.CategorieId.value,
      "MarqueId": this.MarqueId.value,
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
  
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
            this.logo = file;
            // if (this.prodid && this.logo != null) {
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
    reader.readAsDataURL(file);
}

}
