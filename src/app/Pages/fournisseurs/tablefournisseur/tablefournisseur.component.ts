import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';
import { Fournisseur } from 'src/app/Models/fournisseur';
import { FournisseurService } from 'src/app/Shared/fournisseur.service';
import { AddFournisseurComponent } from '../add-fournisseur/add-fournisseur.component';
import { DetailFournisseurComponent } from '../detail-fournisseur/detail-fournisseur.component';


@Component({
  selector: 'app-tablefournisseur',
  templateUrl: './tablefournisseur.component.html',
  styleUrls: ['./tablefournisseur.component.css']
})
export class TablefournisseurComponent implements OnInit {
  public listFournisseurs: Fournisseur[] = [];
  public fournisseurSelectionne: any;
  receivedRow:any;
 
  displayedColumns: string[] = ['id','nom','adresse','contact','email','actions'];
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  showDataOfChildComponent: any;

  constructor(private dialog: MatDialog,
    private fournisseurService:FournisseurService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.receivedRow= new Fournisseur;
    this.fournisseurSelectionne = new Fournisseur();
    this.refreshFournisseurs();
    this.fournisseurService.RequiredRefresh.subscribe(r => {
      this.refreshFournisseurs();
    })
  }

  OnChanges() {
    this.refreshFournisseurs();
  }
  
  loadFournisseur(fournisseur:Fournisseur){
    this.fournisseurService.fournisseur = Object.assign({},fournisseur);
    console.log('categorie loaded',fournisseur);
  }
 

  refreshFournisseurs(){
    this.fournisseurService.getFournisseurs().subscribe(result => {
      this.listFournisseurs = result;
      this.dataSource = new MatTableDataSource<Fournisseur>(this.listFournisseurs);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }




  Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  getFournisseur(id: number) {
    this.fournisseurSelectionne = this.listFournisseurs.find((g) => g.Id == id);
    console.log(this.fournisseurSelectionne);
  }
  
  public updateFournisseur(id: number) {
   
    
  }

  deleteFournisseur(id:number){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.fournisseurService.deleteFournisseur(id).subscribe((res) => {
      this.refreshFournisseurs();
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
     const dialogRef = this.dialog.open(DetailFournisseurComponent,{width:'50%',height: '500px',
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
  openAddFournisseurDialog(){
    let dialogRef= this.dialog.open(AddFournisseurComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }


}
