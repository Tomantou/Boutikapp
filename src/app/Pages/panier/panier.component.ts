import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  produits : any[] = [];
  total = 100;

  constructor() { }

  ngOnInit(): void {
    this.produits = [
      { id: 1, prix: 1,
        produitModel: {
          nom: 'samsung'
      },
      quantite: 10,
      solde: 1
    },
    { id: 1, prix: 1,
      produitModel: {
        nom: 'samsung'
    },
    quantite: 10,
    solde: 1
  },
  { id: 1, prix: 1,
    produitModel: {
      nom: 'samsung'
  },
  quantite: 10,
  solde: 1
},
{ id: 1, prix: 1,
  produitModel: {
    nom: 'samsung'
},
quantite: 10,
solde: 1
}

    ]

  }

}
