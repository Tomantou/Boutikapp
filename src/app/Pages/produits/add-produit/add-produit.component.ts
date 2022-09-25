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
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogref: MatDialogRef<AddProduitComponent>
    ) { }

  ngOnInit(): void {
    this.refreshProduits();
    if(this.data.id != null && this.data.id !=0){
      this.loadEditData(this.data.id);
    }
    this.categorieservice.getCategories().subscribe(categories => {
      this.Categories = categories;
      console.log(this.Categories);
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
    Nom: '',
    Prix: 0,
    Photo: '',
    Nouveaute: '',
    Description: '',
    CategorieId: '',
    MarqueId:''
  });
}
 
  public create() {
    this.prodservice.createProduct(this.form.getRawValue()).subscribe(result => {
        this.saveresp = result;
        if(this.saveresp.result =='pass'){
          alertifyjs.success('produit enregistré avec succès');
          this.dialogref.close();
        }else{
          alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
        }
        console.log('produt enreg')
        this.prodid = result.id;
        console.log(this.prodid)
        console.log(this.form.value)
   
    });
   }
 

   loadEditData(id: any){
    this.prodservice.getProductById(id).subscribe(item =>{
      this.EditData = item;
      this.form.setValue({Nom:this.EditData.Nom,Prix:this.EditData.Prix,
        Photo:this.EditData.Photo,Nouveaute:this.EditData.Nouveaute,
        Description:this.EditData.Description,CategorieId:this.EditData.CategorieId,
        MarqueId:this.EditData.MarqueId
        })
      

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
