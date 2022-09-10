import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edittranstock',
  templateUrl: './edittranstock.component.html',
  styleUrls: ['./edittranstock.component.css']
})
export class EdittranstockComponent implements OnInit {

  
  Quantite = new FormControl;
  Date = new FormControl;
  Idstockdest = new FormControl;
  // Navigation properthies
  Idstocksrc = new FormControl;
  Pvente = new FormControl;
   
  constructor() { }

  ngOnInit(): void {
  }

}
