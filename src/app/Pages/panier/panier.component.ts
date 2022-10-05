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

  public add(id : string) {
    this.panierSerivce.add(id).subscribe(respose => this.refresh())
  }
  public decrease(id : string) {
    this.panierSerivce.decrease(id).subscribe(respose => this.refresh())
  }

  private refresh() {
    this.panierSerivce.getPaniers(localStorage.getItem("userid")!).subscribe(
      response => this.produits = response
    );
  }

  ngOnInit(): void {
    this.refresh();

}
}
