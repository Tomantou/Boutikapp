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


/* export interface PeriodicElement {
  nom: string;
  description: string;
  prix: number;
  categorieid: number;
  marqueid: number;
  actions:'';

}
 */
@Component({
  selector: 'app-tableproduct',
  templateUrl: './tableproduct.component.html',
  styleUrls: ['./tableproduct.component.css']
})
export class TableproductComponent implements OnInit {
  public lesproduits: Produit[] = [];
  public selectedProduct: any;
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

  ngOnInit(): void {
    this.selectedProduct = new Produit();
    this.refreshProduits();
    this.prodservice.RequiredRefresh.subscribe(r => {
      this.refreshProduits();
    })
    
  }

  refreshProduits(){
    this.prodservice.getProduits().subscribe(result => {
      this.lesproduits = result;
      this.dataSource = new MatTableDataSource<Produit>(this.lesproduits);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });


  
   /* Filterchange(event:Event);{
      const filvalue=(event.target as HTMLInputElement).value;
      this.dataSource.sort=this.sort;
    } 
     */
  }

   
     

   Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

  getrow(row:any){
    //console.log(row);
  }

  functionEdit(row:any){
    console.log(row);
  }

  

  form: FormGroup = new FormGroup({
    Nom: new FormControl('', Validators.required),
    Prix: new FormControl(),
    Photo: new FormControl(''),
    Nouveaute: new FormControl(''),
    Description: new FormControl(''),
    CategorieId: new FormControl('',Validators.required),
    MarqueId: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
    Nom: '',
    Prix: 0,
    Photo: '',
    Nouveaute: '',
    Description: '',
    CategorieId: '',
    MarqueId:''
  });
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

  openAddprodDialog(enteranimation:any,exitanimation:any,idprod:any){

    this.dialog.open(AddProduitComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:'60%',
      data:{id:idprod}
    })
   /*  let dialogRef= this.dialog.open(AddProduitComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    }); */
  }

  openDetailprodDialog(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width='50%';

    this.dialogConfig.data ={
      nom:'nom',
      prix:0,
      description:'description'

    }

    this.dialog.open(DetailProduitComponent, dialogConfig);

    const dialogRef = this.dialog.open(DetailProduitComponent, dialogConfig);



    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
     
    /* let dialogRef = this.dialog.open(DetailProduitComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });  */
     
  }


}
function Filterchange(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly AT_TARGET: number; readonly BUBBLING_PHASE: number; readonly CAPTURING_PHASE: number; readonly NONE: number; }) {
  throw new Error('Function not implemented.');
}

