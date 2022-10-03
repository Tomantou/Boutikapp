import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/Models/categorie';
import { Marque } from 'src/app/Models/marque';
import { CategorieService } from 'src/app/Shared/categorie.service';
import { MarqueService } from 'src/app/Shared/marque.service';
import { ProduitsService } from 'src/app/Shared/produit.service';
import * as alertifyjs from 'alertifyjs';
import { Produit } from 'src/app/Models/produit';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  public lesproduits: Produit[] = [];
  saveresp:any;
  messageclass='';
  message ='';
 

  public Categories : Categorie[] = [];
  public Marques:Marque [] = [];
  public selectedCategorie: Categorie = new Categorie;
  public selectedMarque: Marque = new Marque;
  Id = new FormControl(0);
  Nom = new FormControl('',Validators.required);
  Prix = new FormControl(0);
  Photo = new FormControl('');
  //logo: File | undefined;
  Nouveaute = new FormControl('');
  // Navigation properthies
  CategorieId = new FormControl(0);
  MarqueId = new FormControl(0);
  Description = new FormControl('');

  EditData:any;
  prodid = 0; 

  constructor(
    private router:Router,
    public prodservice: ProduitsService,
    public categorieservice: CategorieService,
    public marqueservice: MarqueService,
    public dialogref: MatDialogRef<AddProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit(): void {
    this.refreshProduits();
    this.EditData = new Produit;
    this.categorieservice.getCategories().subscribe(categories => {
      this.Categories = categories;
      console.log(this.Categories);
    /* 
      if(this.data.empcode != null && this.data.empcode !=''){
        this.loadEditData(this.data.empcode);
      } */

    })

    this.marqueservice.getMarques().subscribe(marques => {
      this.Marques = marques;
      console.log(this.Marques);
      
    })
    
  }

  refreshProduits(){
    this.prodservice.getProduits().subscribe(result => {
      this.lesproduits = result;
      console.log(this.lesproduits);
      
    })
  }
  form: FormGroup = new FormGroup({
    Id: new FormControl({value:0, disabled:true}),
    Nom: new FormControl('', Validators.required),
    Prix: new FormControl(0),
    Photo: new FormControl(''),
    Nouveaute: new FormControl(''),
    Description: new FormControl(''),
    CategorieId: new FormControl('',Validators.required),
    MarqueId: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
    Id:0,
    Nom: '',
    Prix: 0,
    Photo: '',
    Nouveaute: '',
    Description: '',
    CategorieId: '',
    MarqueId:''
  });
}

onSubmit(){
  if(this.prodservice.form.valid){
    this.create();// en exemple au lieu du form de produit service
    this.prodservice.form.reset();
    this.prodservice.initializeFormGroup();
    /* this.notifications.service.success(':: submitted successfuly') */
    this.onClose();
  }
}

onClose(){
  this.prodservice.form.reset();
  this.prodservice.initializeFormGroup();
  this.dialogref.close();
}
 
  public create() {
    this.prodservice.createProduct(this.form.getRawValue()).subscribe({
          next: (produit) => {
            console.log(this.form.value);
            alertifyjs.success('produit enregistré avec succès');
          },
          error:() =>{alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
        },
    });
   }
 

   loadEditData(id: any){
    this.prodservice.getProductById(id).subscribe(item =>{
      this.EditData = item;
      console.log(item);
      this.form.setValue({Id:this.EditData.Id,Nom:this.EditData.Nom,Prix:this.EditData.Prix,
        Photo:this.EditData.Photo,Nouveaute:this.EditData.Nouveaute,
        Description:this.EditData.Description,CategorieId:this.EditData.CategorieId,
        MarqueId:this.EditData.MarqueId
        })
        console.log(this.form.value);
      

    });
  }
  

   gotoProduitClick(): void{
    
    this.router.navigate(['produits']);
 }
  
 onClear(){
  this.form.reset();
  this.initializeFormGroup();
}

}
