import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddConfigdataComponent } from './add-configdata/add-configdata.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfigdataService } from 'src/app/Shared/configdata.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-configdata',
  templateUrl: './configdata.component.html',
  styleUrls: ['./configdata.component.css']
})
export class ConfigdataComponent implements OnInit {
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
  
  constructor(private dialog:MatDialog,
              private configservice:ConfigdataService,
              private router:Router) { }

  ngOnInit(): void {
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

  openEditConfigDialog(){

  }
  

  openAddConfigDialog(enteranimation:any,exitanimation:any,tva:any){

    this.dialog.open(AddConfigdataComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:'60%',
      data:{tva:tva}
    })

  }

   getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    } 

    return this.email.hasError('email') ? 'Not a valid email' : '';
  } 

  gotoAccueilClick(): void{
    this.router.navigate(['accueil']);
  }

  gotoAddConfigdataClick(): void{
    this.router.navigate(['configdata/add-configdata'])
  }

  create(){

  }

  selectFiles(event:any){

  }

}
