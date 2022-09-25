import { Component, Inject, OnInit } from '@angular/core';
import { ThenewsService } from 'src/app/Shared/thenews.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
saveresp:any;
  constructor(public newsservice: ThenewsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogref: MatDialogRef<AddNewsComponent>) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    Titre: new FormControl(''),
    Texte1: new FormControl(''),
    Texte2: new FormControl(''),
    Image: new FormControl(''),
    Datepublication: new FormControl(''),
    Publier: new FormControl(''),
    
  });

  initializeFormGroup(){
    this.form.setValue({
    Titre: '',
    Texte1: '',
    Texte2: '',
    Image: '',
    Datepublication:'',
    Publier: ''
    
    });
  }


  public create() {
    this.newsservice.createNews(this.form.getRawValue()).subscribe(result => {
        this.saveresp = result;
        if(this.saveresp.result =='pass'){
          alertifyjs.success('produit enregistré avec succès');
          this.dialogref.close();
        }else{
          alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
        }
        
        console.log(this.form.value)
   
    });
   }


  /* public create() {
    this.newsservice.createNews(
      {
      
       "Titre": this.form.value['Titre'],
      "Texte1": this.form.value['Texte1'],
       "Texte2": this.form.value['Texte2'],
       "Image": this.form.value['Image'],
       "Datepublication": this.form.value['Datepublication'],
       "Publier": this.form.value['Publier'] 
     } 
    ).subscribe(result => {
     console.log('news enreg')
     if(this.saveresp.result =='pass'){   alertifyjs.success('produit enregistré avec succès');
     this.dialogref.close();
   }else{
     alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
   }
   
    });
   } */
  

  onClear(){
    this.form.reset();
    this.initializeFormGroup();
  }
  
}
