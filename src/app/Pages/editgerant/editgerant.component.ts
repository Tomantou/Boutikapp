import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editgerant',
  templateUrl: './editgerant.component.html',
  styleUrls: ['./editgerant.component.css']
})
export class EditgerantComponent implements OnInit {
  Categorie = new FormControl;
  Nom = new FormControl;
  Prenom = new FormControl;
  Contact = new FormControl;
  Email = new FormControl;
  

  constructor() { }

  ngOnInit(): void {
  }

}
