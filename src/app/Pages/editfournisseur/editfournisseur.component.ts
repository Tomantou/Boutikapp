import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editfournisseur',
  templateUrl: './editfournisseur.component.html',
  styleUrls: ['./editfournisseur.component.css']
})
export class EditfournisseurComponent implements OnInit {
  Nom = new FormControl;
  Adresse = new FormControl;
  Contact = new FormControl;
  Email = new FormControl;
  

  constructor() { }

  ngOnInit(): void {
  }

}
