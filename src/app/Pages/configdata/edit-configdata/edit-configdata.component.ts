import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-configdata',
  templateUrl: './edit-configdata.component.html',
  styleUrls: ['./edit-configdata.component.css']
})
export class EditConfigdataComponent implements OnInit {
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

}
