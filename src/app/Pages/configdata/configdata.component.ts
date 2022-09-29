import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddConfigdataComponent } from './add-configdata/add-configdata.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfigdataService } from 'src/app/Shared/configdata.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
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
              private configservice:ConfigdataService) { }

  ngOnInit(): void {
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

}
