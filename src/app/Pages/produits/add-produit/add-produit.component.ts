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
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadfileService } from 'src/app/Shared/loadfile.service'; 

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

  public lesproduits: Produit[] = [];
  saveresp:any;
  messageclass='';
  
 

  public Categories : Categorie[] = [];
  public Marques:Marque [] = [];
  public selectedCategorie: Categorie = new Categorie;
  public selectedMarque: Marque = new Marque;
  /* Id = new FormControl(0);
  Nom = new FormControl('',Validators.required);
  Prix = new FormControl(0);
  Photo = new FormControl('');
  //logo: File | undefined;
  Nouveaute = new FormControl('');
  // Navigation properthies
  CategorieId = new FormControl(0);
  MarqueId = new FormControl(0);
  Description = new FormControl(''); */

  EditData:any;
  prodid = 0; 

  constructor(
    private loadfileservice:LoadfileService,
    private router:Router,
    public prodservice: ProduitsService,
    public categorieservice: CategorieService,
    public marqueservice: MarqueService,
    public dialogref: MatDialogRef<AddProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit(): void {
    this.imageInfos = this.loadfileservice.getFiles();
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

   

    this.marqueservice.recupererMarques().subscribe(marques => {
      this.Marques = marques;
      console.log(this.Marques);
      
    })
    
  }
  imgFile:string='';
 
  produit:Produit= {
    categorieId: 0,
    marqueId:0,
    nom:'',
    prix:0,
    nouveaute:'',
    photo:'',
    description:'',
    soldePromo:0
  };
  nom:string='';
  prix:number=0;
  nouveaute:string='';
  description:string='';
  categorieId:number=0;
  marqueId:number=0;
  soldePromo=0;
  enregistrerProduit(){
    this.produit.categorieId=this.categorieId;
    this.produit.marqueId=this.marqueId;
    this.produit.nom= this.nom;
    this.produit.prix = this.prix;
    this.produit.nouveaute= this.nouveaute;
    this.produit.description= this.description;
    // this.produit.photo=this.imgFile;
    console.log('objet produit:',this.produit);
    this.prodservice.createProduct(this.produit).subscribe((donnee:any)=>{
      alertifyjs.success('produit enregistré avec succès');
    });
  }
  recupererFichier(): string{
    let fichier=new File([this.imgFile],'test.jpg',{type:'image/jpg'});
    console.log('nom du fichier:',fichier.name);
    return fichier.name;
  }

  refreshProduits(){
    this.prodservice.getProduits().subscribe(result => {
      this.lesproduits = result;
      console.log(this.lesproduits);
      
    })
  }
  form: FormGroup = new FormGroup({
    $Id: new FormControl({value:0, disabled:true}),
    Nom: new FormControl('', Validators.required),
    Prix: new FormControl(0),
    Photo: new FormControl(''),
    Nouveaute: new FormControl(''),
    Description: new FormControl(''),
    CategorieId: new FormControl('',Validators.required),
    MarqueId: new FormControl('',Validators.required),
    SoldePromo: new FormControl(0)
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

// selectFiles function
selectFiles(event: any): void {
  this.message = [];
  this.progressInfos = [];
  this.selectedFileNames = [];
  this.selectedFiles = event.target.files;

  this.previews = [];
  if (this.selectedFiles && this.selectedFiles[0]) {
    const numberOfFiles = this.selectedFiles.length;
    for (let i = 0; i < numberOfFiles; i++) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imgFile = e.target.result as string;
        console.log(e.target.result);
        this.previews.push(e.target.result);
      };

      reader.readAsDataURL(this.selectedFiles[i]);

      this.selectedFileNames.push(this.selectedFiles[i].name);
    }
  }
  }

  //uploadFiles fucntion
  uploadFiles(): void {
    this.message = [];
  
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  //upload function
  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
  
    if (file) {
      this.loadfileservice.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.imageInfos = this.loadfileservice.getFiles();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        });
    }
  }

}
