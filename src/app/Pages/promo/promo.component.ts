import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Textechaussure = `Chaussure de sécurité siev .`;
  Textetoner = `Cartouche Toner pour imprimante laser .`;

}
