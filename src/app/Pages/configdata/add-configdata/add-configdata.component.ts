import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfigdataService } from 'src/app/Shared/configdata.service';
import * as alertifyjs from 'alertifyjs';
import { environment } from 'src/environments/environment';
import {  ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-add-configdata',
  templateUrl: './add-configdata.component.html',
  styleUrls: ['./add-configdata.component.css']
})
export class AddConfigdataComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput!: ElementRef;
  fileAttr = 'Choose File';

  
  urllink:string = "C:/Users/hp/Boutikapp/src/app/assets/img/slider/9.jpg";
  tva = new FormControl();
  raisonsociale = new FormControl();
  typesociete = new FormControl();
  logo = new FormControl();
  adresse = new FormControl();
  contact = new FormControl();
  email = new FormControl('', [Validators.required, Validators.email]);
  pays = new FormControl();
  tauxtva = new FormControl();
  devise = new FormControl();
  quisommesnous = new FormControl();
  notrepolitique = new FormControl();
  nosobjectifs = new FormControl();
  constructor(public configservice: ConfigdataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogref: MatDialogRef<AddConfigdataComponent>) { }

  ngOnInit(): void {

  }


  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }



   url=('../assets/img/slider/7.jpg');

  onselectFiles(event:any){
    if(event.target.uploadFiles){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload =(event:any) =>{
         this.url = event.target.result;
        }

    }

  }

  onFileSelected(){
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  form: FormGroup = new FormGroup({
    tva: new FormControl(0,Validators.required),
    raisonsociale: new FormControl('',Validators.required),
    typesociete: new FormControl('',Validators.required),
    logo: new FormControl(''),
    adresse: new FormControl('',Validators.required),
    contact:new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pays: new FormControl('',Validators.required),
    tauxtva: new FormControl(0,Validators.required),
    devise: new FormControl('',Validators.required),
    quisommesnous: new FormControl('',Validators.required),
    notrepolitique: new FormControl('',Validators.required),
    nosobjectifs: new FormControl('',Validators.required),
    });
  
    initializeFormGroup(){
      this.form.setValue({
      tva:0,
      raisonsociale: '',
      Typesociete: '',
      logo: '',
      adresse: '',
      contact:'',
      email: '',
      pays:'',
      tauxtva:'',
      devise:'',
      quisommesnous:'',
      notrepolitique:'',
      nosobjectifs:''
      
      });
    }

  public create() {
    this.configservice.saveSignaletique(this.form.getRawValue()).subscribe({
      next: (configdata)  => {alertifyjs.success('données enregistrées avec succès');
      console.log(this.form.value)
      },
      error: () =>  {alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
        }
    });
  } 

}
