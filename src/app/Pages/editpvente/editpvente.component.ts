import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editpvente',
  templateUrl: './editpvente.component.html',
  styleUrls: ['./editpvente.component.css']
})
export class EditpventeComponent implements OnInit {
  Adresse = new FormControl;
  Contact = new FormControl;
  Codepostal = new FormControl;
  Email = new FormControl;
  Ville = new FormControl;
  GerantId = new FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
