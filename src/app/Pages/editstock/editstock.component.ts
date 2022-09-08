import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editstock',
  templateUrl: './editstock.component.html',
  styleUrls: ['./editstock.component.css']
})
export class EditstockComponent implements OnInit {
  Id = new FormControl;
  Quantite = new FormControl;
  QuantiteMin = new FormControl;
  QuantiteMax = new FormControl;
  // Navigation properthies
  PventeId = new FormControl;
  ProduitId = new FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
