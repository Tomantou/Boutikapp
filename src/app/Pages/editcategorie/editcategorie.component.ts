import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editcategorie',
  templateUrl: './editcategorie.component.html',
  styleUrls: ['./editcategorie.component.css']
})
export class EditcategorieComponent implements OnInit {
  Libelle = new FormControl;
  

  constructor() { }

  ngOnInit(): void {
  }

}
