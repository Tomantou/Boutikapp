import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/Shared/produit.service';
import { Produit } from 'src/app/Models/produit';

export interface PeriodicElement {
  nom: string;
  description: string;
  prix: number;
  categorieid: number;
  marqueid: number;
  actions:'';

}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {nom: 'HP305', prix: 35, photo: '1.jpg', description: 'Cartouche HP 305'},
//   {nom: 'HP305', prix: 35, photo: '1.jpg', description: 'Cartouche HP 305'},
//   {nom: 'HP305', prix: 35, photo: '1.jpg', description: 'Cartouche HP 305'},
// ];

@Component({
  selector: 'app-tabprod',
  templateUrl: './tabprod.component.html',
  styleUrls: ['./tabprod.component.css']
})
export class TabprodComponent implements OnInit {
  public lesproduits: Produit[] = [];
  public selectedProduct:any;
  
  displayedColumns: string[] = ['nom','description','prix','categorieid','marqueid','actions'];
  stateSpinner = false;
  dataSource: any;
  

  constructor(
    private prodservice: ProduitsService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.refreshProduits();
  }

  refreshProduits(){
    this.prodservice.getProduits().subscribe(result => {
      this.dataSource = result;
    })

    this.prodservice.getProduits().subscribe(produits => {
      this.lesproduits = produits;
      console.log(this.lesproduits);
    })
    
  }

  getProduit(id: number) {
    this.selectedProduct= new Produit;
    this.selectedProduct = this.lesproduits.find((p) => p.id == id);
    console.log(this.selectedProduct);
  }
  
  detailsProduct(){
    console.log('vrai');
  }
  updateProduct(){
     console.log('vrai');
  }

  deleteProduct(id:number){
    return this.prodservice.deleteProduct(id).subscribe((res) => {
      this.refreshProduits();
      
    });
  }

  public openProduit(id: number) {
    window.open("/produits/" + id + "/edit")
  }

  showSpinner(){
    this.stateSpinner = true;
    setTimeout(() => {
      this.stateSpinner = false;
    }, 5000);
  }

  gotoEditproduitClick(): void{
    this.router.navigate(['produits/edit-produit']);
  }
  

}
