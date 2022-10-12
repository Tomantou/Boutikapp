import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarqueService } from 'src/app/Shared/marque.service';
import { ProduitsService } from 'src/app/Shared/produit.service';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.css']
})
export class AddMarqueComponent implements OnInit {

  constructor(public marqueservice: MarqueService,
    @Inject(MAT_DIALOG_DATA) public data: any
              ) { }

  ngOnInit(): void {
  }

  onClear(){
    this.marqueservice.form.reset();
    this.marqueservice.initializeFormGroup();
  }

  createMarque(){
    this.marqueservice.creerMarque(this.marqueservice.form.getRawValue()).subscribe({
      next: (marque) => {
        console.log(this.marqueservice.form.value);
        alertifyjs.success('produit enregistré avec succès');
      },
      error:() =>{alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
     },
   });
 }
  

}
