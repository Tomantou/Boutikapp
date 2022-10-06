import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TableproductComponent } from '../tableproduct/tableproduct.component';
import { Marque } from 'src/app/Models/marque';
import { Categorie } from 'src/app/Models/categorie';
import { MarqueService } from 'src/app/Shared/marque.service';
import { CategorieService } from 'src/app/Shared/categorie.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  receivedRow:any;
  listMarques:Marque[]=[];
  listCategories:Categorie[]=[];


  constructor(private marqueService:MarqueService,
    private categorieService:CategorieService,
     public dialogRef: MatDialogRef<DetailProduitComponent>,
          @Inject(MAT_DIALOG_DATA) public data:any
          ) {}
  

  ngOnInit(): void {
    console.log('entrée détail');

    this.receivedRow=this.data;
    this.recupererListMarques();
    this.recupererListCategories();
    console.log(this.receivedRow);
    console.log('data:',this.data);
  }

  recupererListMarques(){
    this.marqueService.recupererMarques().subscribe((marques:Array<Marque>) =>{
         marques.forEach((marque:Marque)=>{
           if(marque.id!==this.data.id){
            this.listMarques.push(marque);
           }
          
         });
    });
  }

  recupererListCategories(){
    this.categorieService.getCategories().subscribe((categories:Array<Categorie>) =>{
      categories.forEach((categorie:Categorie)=>{
        if(categorie.id!==this.data.id){
         this.listCategories.push(categorie);
        }
       
      });
 });
 }

  gotoProduitClick(): void{
    
    // this.router.navigate(['produits']);
 }
}
