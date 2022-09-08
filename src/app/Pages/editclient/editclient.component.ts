import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {
  Nom = new FormControl;
  Prenoms = new FormControl;
  Adresse = new FormControl;
  Contact = new FormControl;
  Email = new FormControl;
  Codepostal = new FormControl;
  Ville = new FormControl;
  Civilite = new FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
