import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TableproductComponent } from '../tableproduct/tableproduct.component';
import { Marque } from 'src/app/Models/marque';
import { Categorie } from 'src/app/Models/categorie';
import { MarqueService } from 'src/app/Shared/marque.service';
import { CategorieService } from 'src/app/Shared/categorie.service';
import { environment } from 'src/environments/environment';
import {DomSanitizer} from '@angular/platform-browser';
import { ProduitsService } from 'src/app/Shared/produit.service';
import { Produit } from 'src/app/Models/produit';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  receivedRow:any;
  listMarques:Marque[]=[];
  listCategories:Categorie[]=[];
  dialog: any;
  showDataOfChildComponent: any;
  imagesUrl = environment.imagesUrl;

  constructor(private marqueService:MarqueService,
             private categorieService:CategorieService,
             public dialogRef: MatDialogRef<DetailProduitComponent>,
              private prodservice:ProduitsService,
             @Inject(MAT_DIALOG_DATA) public data:any
          ) {}
  

  ngOnInit(): void {
    console.log('entrée détail');

    this.receivedRow=this.data;
    this.recupererListMarques();
    this.recupererListCategories();
    console.log('data:',this.data);
  }

  public editProduit(id: number, prodRequest:Produit) {
    this.prodservice.updateProduct(id, prodRequest).subscribe();  
    alertifyjs.success('produit modifié avec succès');
  }

  recupererImage():string{
     const image = new File([this.receivedRow.photo],'test.jpeg',{type:'image/jpeg'});
     console.log('image récupérée',image)
     return image.name;
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

 openDialogDet(row:any,action:string){
  console.log('row:',row)
   const dialogRef = this.dialog.open(DetailProduitComponent,{width:'50%',height: '500px',
   enterAnimationDuration:'500ms',
   exitAnimationDuration: '500ms',
   data:{
    id:row.id,
    nom: row.nom,
    prix: row.prix,
    photo: row.photo,
    nouveaute:row.nouveaute,
    description: row.description,
    soldepromo:row.soldePromo,
    action:action
   }
   
   }); 

       
   dialogRef.afterClosed().subscribe((result: any) => {
    this.showDataOfChildComponent = result;
    console.log('here is the data result', result)
  });  

}

}
