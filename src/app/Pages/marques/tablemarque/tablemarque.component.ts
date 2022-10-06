import { Component, OnInit, ViewChild } from '@angular/core';
import { AddProduitComponent } from '../../produits/add-produit/add-produit.component';
import { AddMarqueComponent } from '../add-marque/add-marque.component';
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
import { MarqueService } from 'src/app/Shared/marque.service';
import { DetailMarqueComponent } from '../detail-marque/detail-marque.component';



@Component({
  selector: 'app-tablemarque',
  templateUrl: './tablemarque.component.html',
  styleUrls: ['./tablemarque.component.css']
})
export class TablemarqueComponent implements OnInit {
  public listMarques: Marque[] = [];
  public marqueSelectionnee: any;
  selectedMarquee:any;
  receivedRow:any;

  displayedColumns: string[] = ['id','nom','origine','actions'];
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  showDataOfChildComponent: any;

  constructor(private dialog: MatDialog,
              private marqueService:MarqueService,
              private router: Router,
              private http: HttpClient,) { }

  ngOnInit(): void {
    this.receivedRow= new Marque;
    this.marqueSelectionnee = new Categorie();
    this.refreshMarques();
    this.marqueService.RequiredRefresh.subscribe(r => {
      this.refreshMarques();
    })
  }
  loadMarque(marque:Marque){
    this.marqueService.marque = Object.assign({},marque);
    console.log('categorie loaded',marque);
  }
 

  refreshMarques(){
    this.marqueService.recupererMarques ().subscribe(result => {
      this.listMarques = result;
      this.dataSource = new MatTableDataSource<Marque>(this.listMarques);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }




  Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  getCategorie(id: number) {
    this.marqueSelectionnee.categorieSelectionnee = this.listMarques.find((p) => p.id == id);
    console.log(this.marqueSelectionnee.categorieSelectionnee);
  }
  
  public updateMarque(id: number) {
   
    
  }

  deleteMarque(id:number){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.marqueService.supprimerMarque(id).subscribe((res) => {
      this.refreshMarques();
      alertifyjs.success('produit supprimé avec succès');
    });},
     function(){alertifyjs.success('suppression produit annulée');})
  }


  public openMarque(id: number) {
    window.open("/produits/" + id + "/edit")
  }


  getrow(row:any){
   this.receivedRow=row;
  }
  
  
  openDialogDet(row:any,action:string){
     const dialogRef = this.dialog.open(DetailMarqueComponent,{width:'50%',height: '500px',
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
  openAddmarqueDialog(){
    let dialogRef= this.dialog.open(AddMarqueComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }

}
