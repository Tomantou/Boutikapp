import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/Shared/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  produits : any[] = [];
  total = 0;

  constructor(private panierSerivce: PanierService) { }

  ngOnInit(): void {
    this.refresh();
    console.log('produits paniers',this.produits);

}

  public add(id : string) {
    this.panierSerivce.add(id).subscribe(response => this.refresh())
  }
  public decrease(id : string) {
    this.panierSerivce.decrease(id).subscribe(response => this.refresh())
  }

  private refresh() {
    this.panierSerivce.getPaniers(localStorage.getItem("userid")!).subscribe(
      response => this.produits = response
    );
  }

  
}
