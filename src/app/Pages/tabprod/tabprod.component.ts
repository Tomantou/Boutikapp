import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/Shared/produit.service';
import { Produit } from 'src/app/Models/produit';
import { Dialog } from '@angular/cdk/dialog';
import { AddProduitComponent } from '../produits/add-produit/add-produit.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
  public selectedProduct: any;
  
  displayedColumns: string[] = ['nom','description','prix','categorieid','marqueid','actions'];
  stateSpinner = false;
  dataSource: any;
  

  constructor(
    private prodservice: ProduitsService,
    private router: Router,
    private http: HttpClient,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.selectedProduct = new Produit();
    this.refreshProduits();
   
  }

  refreshProduits(){
    this.prodservice.getProduits().subscribe(result => {
      // this.dataSource = result;
      this.lesproduits = result;
      this.dataSource =result;
    })

    this.prodservice.getProduits().subscribe(produits => {
      this.lesproduits = produits;
      console.log(this.lesproduits);
    })
    
  }

  getProduit(id: number) {
    this.selectedProduct = this.lesproduits.find((p) => p.id == id);
    console.log(this.selectedProduct);
  }
  
  deleteProduct(id:number){
    return this.prodservice.deleteProduct(id).subscribe((res) => {
      this.refreshProduits();
      
    });
  }

  public openProduit(id: number) {
    window.open("/produits/" + id + "/edit")
  }


  
  detailsProduct(){
    console.log('vrai');
  }
  updateProduct(){
     console.log('vrai');
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

  gotoDetailProduitClick(): void{
    this.router.navigate(['produits/detail-produit']);
  }

  openAddproduitClick(){
    this.dialog.open(AddProduitComponent);
  }

  openDetailprodDialog(){
    let dialogRef = this.dialog.open(DialogComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    }); 
     
  }
  

}
