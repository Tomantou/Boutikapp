import { Component, Inject, OnInit } from '@angular/core';
import { ThenewsService } from 'src/app/Shared/thenews.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as alertifyjs from 'alertifyjs';
import { News } from 'src/app/Models/news';
import { MatDatepickerContent } from '@angular/material/datepicker';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
thenew:News = new News;


saveresp:any;
  constructor(public newsservice: ThenewsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogref: MatDialogRef<AddNewsComponent>) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    //Id: new FormControl({value:0, disabled:true}),
    Titre: new FormControl('', Validators.required),
    Texte1: new FormControl('', Validators.required),
    Texte2: new FormControl(''),
    Image: new FormControl(''),
    Datepublication: new FormControl(Date),
    Publier: new FormControl(false,Validators.required),
    
  });

  initializeFormGroup(){
    this.form.setValue({
    Id:0,
    Titre: '',
    Texte1: '',
    Texte2: '',
    Image: '',
    Datepublication:'',
    Publier: ''
    
    });
  }

  public saveNews(){
     this.newsservice.createNews(this.thenew)
     .subscribe({
       next: (news) =>{
        console.log(news);
       },
       error:() =>{
        console.log('Erreur');
       } 
     })
  }


  public create() {
    this.newsservice.createNews(this.form.getRawValue()).subscribe({
      next: (news)  => {alertifyjs.success('produit enregistré avec succès');
      console.log(this.form.value)
      },
      error: () =>  {alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
        }
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
