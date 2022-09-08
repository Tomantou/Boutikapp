import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  
  constructor() { }

  ngOnInit(): void {
  }
  

   getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    } 

    return this.email.hasError('email') ? 'Not a valid email' : '';
  } 

}
