import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Gerant } from 'src/app/Models/gerant';
import { GerantService } from 'src/app/Shared/gerant.service';
import { AddGerantComponent } from '../add-gerant/add-gerant.component';
import { DetailGerantComponent } from '../detail-gerant/detail-gerant.component';
import * as alertifyjs from 'alertifyjs';
import { CategorieService } from 'src/app/Shared/categorie.service';


@Component({
  selector: 'app-tablegerant',
  templateUrl: './tablegerant.component.html',
  styleUrls: ['./tablegerant.component.css']
})
export class TablegerantComponent implements OnInit {
  public listGerants: Gerant[] = [];
  public gerantSelectionne: any;
  receivedRow:any;

  displayedColumns: string[] = ['id','categorie','nom','prenom','contact','email','actions'];
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  showDataOfChildComponent: any;


  constructor(private dialog: MatDialog,
    private gerantService:GerantService,
    private router: Router,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.receivedRow= new Gerant;
    this.gerantSelectionne = new Gerant();
    this.refreshGerants();
    this.gerantService.RequiredRefresh.subscribe(r => {
      this.refreshGerants();
    })
  }

  loadGerant(gerant:Gerant){
    this.gerantService.gerant = Object.assign({},gerant);
    console.log('categorie loaded',gerant);
  }
 

  refreshGerants(){
    this.gerantService.recupererGerants().subscribe(result => {
      this.listGerants = result;
      this.dataSource = new MatTableDataSource<Gerant>(this.listGerants);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }




  Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  getGerant(id: number) {
    this.gerantSelectionne = this.listGerants.find((g) => g.id == id);
    console.log(this.gerantSelectionne);
  }
  
  public updateMarque(id: number) {
   
    
  }

  deleteGerant(id:number){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.gerantService.supprimerGerant(id).subscribe((res) => {
      this.refreshGerants();
      alertifyjs.success('produit supprimé avec succès');
    });},
     function(){alertifyjs.success('suppression produit annulée');})
  }


  public openGerant(id: number) {
    window.open("/produits/" + id + "/edit")
  }


  getrow(row:any){
   this.receivedRow=row;
  }
  
  
  openDialogDet(row:any,action:string){
     const dialogRef = this.dialog.open(DetailGerantComponent,{width:'50%',height: '500px',
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
  openAddGerantDialog(){
    let dialogRef= this.dialog.open(AddGerantComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }


}
