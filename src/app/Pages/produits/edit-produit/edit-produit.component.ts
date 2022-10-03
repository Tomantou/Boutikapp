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
  receivedRow:any;
  lesproduits: Produit[] = [];
  Marques:Marque[]=[];
  Categories:Categorie[]=[];
  public produit: any;
  public marque: any;
  public produitForm: any;
  EditData:any;
  

  constructor(private router: Router,
    private route: ActivatedRoute,
    private produitservice: ProduitsService,
    private categorieservice: CategorieService,
    private marqueservice: MarqueService,
    dialogref:MatDialogRef<EditProduitComponent>,@Inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit(): void {
    this.receivedRow=this.data;
    this.EditData = new Produit;
    this.produitForm= new Produit;
    this.produit = new Produit();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduit(id);
    this.refreshProduits();
    
    if(this.data.id !=null && this.data.id !=''){
      this.loadEditData(this.data.id);
      
    }
    
  }

  refreshProduits(){
    this.produitservice.getProduits().subscribe(result => {
      this.lesproduits = result;
      console.log(this.lesproduits);
        
    })
  }

   loadEditData(id:number){
    this.produitservice.getProductById(id).subscribe(item =>{
       this.EditData = item;
       this.form.setValue({Nom:this.EditData.nom, Prix:this.EditData.prix,
        Photo:this.EditData.photo,Nouveaute:this.EditData.nouveaute,
        Description:this.EditData.nouveaute,CategorieId:this.EditData.categorieid,
        MarqueId:this.EditData.marqueid
        });
        console.log('editdata',this.EditData);
    });
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
    



  public updateProduit() {
    this.produitservice
      .updateProduct(this.produit.Id, this.form.value)
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
  Nom: new FormControl('', Validators.required),
  Prix: new FormControl(),
  Photo: new FormControl(''),
  Nouveaute: new FormControl(''),
  Description: new FormControl(''),
  CategorieId: new FormControl('',Validators.required),
  MarqueId: new FormControl('',Validators.required)
  });

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




