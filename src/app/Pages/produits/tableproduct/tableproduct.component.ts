import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/Shared/produit.service';
import { Produit } from 'src/app/Models/produit';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProduitComponent} from 'src/app/Pages/produits/add-produit/add-produit.component';
import { ProductdialogComponent } from 'src/app/Pages/produits/productdialog/productdialog.component';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';
import { DialogComponent } from '../../dialog/dialog.component';
import { Categorie } from 'src/app/Models/categorie';
import { Marque } from 'src/app/Models/marque';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as alertifyjs from 'alertifyjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { filter } from 'rxjs/operators';
import { EditProduitComponent } from '../edit-produit/edit-produit.component';
import { ConnectableObservable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { DetailsComponent } from '../../details/details.component';

@Component({
  selector: 'app-tableproduct',
  templateUrl: './tableproduct.component.html',
  styleUrls: ['./tableproduct.component.css']
})
export class TableproductComponent implements OnInit {
  lesproduits: Produit[] = [];
  selectedProduct:any;
  selectedRow: any;
  EditData:any;
  Produitid:any;

  displayedColumns: string[] = ['id','nom','description','prix','categorieid','marqueid','actions'];
  stateSpinner = false;
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private prodservice: ProduitsService,
    private router: Router,
    private http: HttpClient,
    public dialog:MatDialog) { }
showDataOfChildComponent:any;
  ngOnInit(): void {
    this.selectedRow = new Produit();
    this.refreshProduits();
    this.prodservice.RequiredRefresh.subscribe(r => {
      this.refreshProduits();
    })
  }

  loadProduit(produit:Produit){
    this.prodservice.produit = Object.assign({},produit);
  }

  refreshProduits(){
    this.prodservice.getProduits().subscribe(result => {
      this.lesproduits = result;
      this.dataSource = new MatTableDataSource<Produit>(this.lesproduits);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });


  }

   
     

   Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

  getrow(row:any){
    this.selectedRow=row;
  console.log(this.selectedRow);
    
  }

  getProduit(id: number) {
    this.selectedProduct = this.lesproduits.find((p) => p.id == id);
    console.log(this.selectedProduct);
  }
  
  public updateProduit(idprod: any) {
      this.openAddprodDialog('1000ms','600ms', idprod)
   /*  this.prodservice
      .updateProduct(id, this.form.value)
      .subscribe(); */
    
  }

  deleteProduct(id:number){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.prodservice.deleteProduct(id).subscribe((res) => {
      this.refreshProduits();
      alertifyjs.success('produit supprimé avec succès');
    });},
     function(){alertifyjs.success('suppression produit annulée');})
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

  gotoDetailProduitClick(): void{
    this.router.navigate(['produits/detail-produit']);
  }

  functionEdit(code:any){
    this.openAddprodDialog('1000ms','500ms',code)
    console.log('le code est', code);
  }

  openEditprodDialog(enteranimation:any,exitanimation:any,code:any){

    this.dialog.open(EditProduitComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:'60%',
      data:{}
    })
   /*  let dialogRef= this.dialog.open(AddProduitComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    }); */
  }

  openAddprodDialog(enteranimation:any,exitanimation:any,code:any){

    this.dialog.open(AddProduitComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:'60%',
      data:{empcode:code}
    })
   /*  let dialogRef= this.dialog.open(AddProduitComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    }); */
  }

  datachild:Produit = new Produit;
  
  openDetailProdDialog(){
      this.dialog.open(DetailProduitComponent,{width:'50%',height: '500px',
                  enterAnimationDuration:'1000ms',
                  exitAnimationDuration: '2000ms',
                  data:{
                    Nom:this.selectedRow.nom,
                    Prenoms:'Issa'
                  }
                  });
  }

  openDialog(){

    /* this.dialog.open(DetailsComponent,{width:'70%',height: '500px',
    enterAnimationDuration:'1000ms',
    exitAnimationDuration: '2000ms',
    data:{
      nom: this.selectedRow.nom,
      prix: this.selectedRow.prix,
      image: this.selectedRow.image,
      description: this.selectedRow.description
    }
    }); */
  
     const dialogRef = this.dialog.open(DetailsComponent,{width:'70%',height: '500px',
     enterAnimationDuration:'1000ms',
     exitAnimationDuration: '2000ms',
     data:{
       nom: this.selectedRow.nom,
       prix: this.selectedRow.prix,
       image: this.selectedRow.image,
       description: this.selectedRow.description
     }
     }); 
    /* dialogRef.afterClosed().subscribe(result => {
      this.showDataOfChildComponent = result;
      console.log('here is the data result ${result}')
    });      */
 
}
  
}