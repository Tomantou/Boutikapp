import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { ProduitsService } from 'src/app/Shared/produit.service';
import { Categorie } from 'src/app/Models/categorie';
import { CategorieService } from 'src/app/Shared/categorie.service';
import { Marque } from 'src/app/Models/marque';
import { MarqueService } from 'src/app/Shared/marque.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  receivedProd:any;
  lesproduits: Produit[] = [];
  Marques:Marque[]=[];
  Categories:Categorie[]=[];
  public marque: any;
  public produitForm: any;
  produit:any;
  
  

  constructor(private router: Router,
    private route: ActivatedRoute,
    private produitservice: ProduitsService,
    private categorieservice: CategorieService,
    private marqueservice: MarqueService,
    dialogref:MatDialogRef<EditProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit(): void {
    this.receivedProd=this.data;
    this.produitForm= new Produit;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduit(id);
    this.refreshProduits();
    
    if(this.data.id !=null && this.data.id !=''){
      this.loadFormData();
      
    }
    
  }

  refreshProduits(){
    this.produitservice.getProduits().subscribe(result => {
      this.lesproduits = result;
      console.log(this.lesproduits);
        
    })
  }

   loadFormData(): void{
       this.form.setValue({ mom:this.receivedProd.nom, prix:this.receivedProd.prix,
        Photo:this.receivedProd.photo,nouveaute:this.receivedProd.nouveaute,
        description:this.receivedProd.description,categorieid:this.receivedProd.categorieid,
        marqueid:this.receivedProd.marqueid
        });
        console.log('editdata',this.receivedProd);
  
   }
  public getProduit(id: number): void {
    this.produitservice.getProductById(id).subscribe((produit) => {
      this.produit = produit;
    });
  }

      
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
    



  public updateProduit(id: number,prodRequest:Produit) {
    this.produitservice
      .updateProduct(id, prodRequest)
      .subscribe();
    
  }

  gotoPageProduits() {
    const lien = ['produits'];
    this.router.navigate(lien);
  }

  gotoProduitClick(): void{
    
    this.router.navigate(['produits']);
 }

 form: FormGroup = new FormGroup({
  nom: new FormControl('', Validators.required),
  prix: new FormControl(),
  photo: new FormControl(''),
  nouveaute: new FormControl(''),
  description: new FormControl(''),
  categorieid: new FormControl('',Validators.required),
  marqueid: new FormControl('',Validators.required)
  });

  productData: Produit ={
    id: 0,
    nom: '',
    prix: 0,
    photo: '',
    nouveaute: '',
    description: '',
    categorieid: 0,
    marqueid: 0,
    
  }
initializeFormGroup(){
  this.form.setValue({
  $Id: null,
  Nom: '',
  Prix: 0,
  Photo: '',
  Nouveaute: '',
  Description: '',
  CategorieId: '',
  MarqueId:''
  });
  }

}




