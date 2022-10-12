import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StockService } from 'src/app/Shared/stock.service';
import * as alertifyjs from 'alertifyjs';
import { Pvente } from 'src/app/Models/pvente';
import { Produit } from 'src/app/Models/produit';
import { PventeService } from 'src/app/Shared/pvente.service';
import { ProduitsService } from 'src/app/Shared/produit.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
lesPventes:Pvente[]=[];
lesProduits:Produit[]=[];



  constructor(public stockservice:StockService,
              private pventeservice:PventeService,
              private produitservice:ProduitsService,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.pventeservice.getPventes().subscribe((pventes) => {
      this.lesPventes = pventes;
    });
    this.produitservice.getProduits().subscribe((produits) => {
      this.lesProduits = produits;
    });
  }

  public creerStock() {
    this.stockservice.createStock(this.stockservice.form.getRawValue()).subscribe({
          next: (client) => {
            console.log(this.stockservice.form.value);
            alertifyjs.success('clientt enregistré avec succès');
          },
          error:() =>{alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
        },
    });
   }


   onClear(){
    this.stockservice.form.reset();
    this.stockservice.initializeFormGroup();
  }

}
