import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editpromotion',
  templateUrl: './editpromotion.component.html',
  styleUrls: ['./editpromotion.component.css']
})
export class EditpromotionComponent implements OnInit {
  Libelle = new FormControl;
  Datedebut= new FormControl;
  Datefin = new FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
