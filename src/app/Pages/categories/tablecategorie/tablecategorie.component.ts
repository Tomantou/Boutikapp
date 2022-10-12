import { Component, OnInit, ViewChild } from '@angular/core';
import { AddCategorieComponent } from '../add-categorie/add-categorie.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Categorie } from 'src/app/Models/categorie';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategorieService } from 'src/app/Shared/categorie.service';
import { MatTableDataSource } from '@angular/material/table';
import { Marque } from 'src/app/Models/marque';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as alertifyjs from 'alertifyjs';
import { filter } from 'rxjs/operators';
import { ThisReceiver } from '@angular/compiler';
import { DetailcategorieComponent } from '../detailcategorie/detailcategorie.component';


@Component({
  selector: 'app-tablecategorie',
  templateUrl: './tablecategorie.component.html',
  styleUrls: ['./tablecategorie.component.css']
})
export class TablecategorieComponent implements OnInit {
  public listCategories: Categorie[] = [];
  public categorieSelectionnee: any;
  selectedCategorie:any;
  receivedRow:any;

  displayedColumns: string[] = ['id','libelle','actions'];
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  showDataOfChildComponent: any;

  
  constructor(private dialog: MatDialog,
              private categorieService:CategorieService,
              private router: Router,
              private http: HttpClient,) { }

  ngOnInit(): void {
    this.receivedRow= new Categorie;
    this.categorieSelectionnee = new Categorie();
    this.refreshCategories();
    this.categorieService.RequiredRefresh.subscribe(r => {
      this.refreshCategories();
    })
  }
  

  loadCategorie(categorie:Categorie){
    this.categorieService.categorie = Object.assign({},categorie);
    console.log('categorie loaded',categorie);
  }
 

  refreshCategories(){
    this.categorieService.getCategories().subscribe(result => {
      this.listCategories = result;
      this.dataSource = new MatTableDataSource<Categorie>(this.listCategories);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }




  Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  getCategorie(id: number) {
    this.categorieSelectionnee = this.listCategories.find((p) => p.id == id);
    console.log(this.categorieSelectionnee);
  }
  
  public updateCategorie(id: number) {
   
    
  }

  deleteCategorie(id:number){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.categorieService.supprimerCategorie(id).subscribe((res) => {
      this.refreshCategories();
      alertifyjs.success('produit supprimé avec succès');
    });},
     function(){alertifyjs.success('suppression produit annulée');})
  }


  public openProduit(id: number) {
    window.open("/produits/" + id + "/edit")
  }


  getrow(row:any){
   this.receivedRow=row;
  }


  gotoEditproduitClick(): void{
    this.router.navigate(['produits/edit-produit']);
  }

  gotoDetailProduitClick(): void{
    this.router.navigate(['produits/detail-produit']);
  }

  openAddCatDialog(enteranimation:any,exitanimation:any,code:any){

    this.dialog.open(AddCategorieComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:'60%',
      data:{catcode:code}
    })
   /*  let dialogRef= this.dialog.open(AddProduitComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    }); */
  }
  
  openDialogDet(row:any,action:string){
     const dialogRef = this.dialog.open(DetailcategorieComponent,{width:'50%',height: '500px',
     enterAnimationDuration:'1000ms',
     exitAnimationDuration: '2000ms',
     data:{
      id:row.id,
      libelle: row.libelle,
     }
     
     }); 

         
     dialogRef.afterClosed().subscribe(result => {
      this.showDataOfChildComponent = result;
      console.log('here is the data result', result)
    });  
 
}
  

}

