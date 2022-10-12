import { Component, Inject, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/Shared/categorie.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categorie } from 'src/app/Models/categorie';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  constructor(public categorieservice: CategorieService,
                    @Inject(MAT_DIALOG_DATA) public data: any,
              ) { }

  ngOnInit(): void {
  }

 
  public createCategorie() {
    this.categorieservice.creerCategorie(this.categorieservice.form.getRawValue()).subscribe({
          next: (categorie) => {
            console.log(this.categorieservice.form.value);
            alertifyjs.success('produit enregistré avec succès');
          },
          error:() =>{alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
        },
    });
   }

    
  

  onClear(){
    this.categorieservice.form.reset();
    this.categorieservice.initializeFormGroup();
  }

}
