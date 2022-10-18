import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Commandecl } from 'src/app/Models/commandecl';
import { CommandeclService } from 'src/app/Shared/commandecl.service';
import { DetcommandeclComponent } from '../../detcommandecl/detcommandecl.component';
import { AddCommandeclComponent } from '../add-commandecl/add-commandecl.component';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-tablecommandecl',
  templateUrl: './tablecommandecl.component.html',
  styleUrls: ['./tablecommandecl.component.css']
})
export class TablecommandeclComponent implements OnInit {
  public listCommandes: Commandecl[] = [];
  public commandeSelectionnee:any;
  public clientSelectionne: any;
  receivedRow:any;

  Total!: Number;
  Adresselivraison!: String;
  Statut!: String;
  UserId!: number;
  PventeId!: number;

  displayedColumns: string[] = ['id','userid','total','statut','adresselivraison','actions'];
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  showDataOfChildComponent: any;


  constructor(private dialog: MatDialog,
    private commandeclService:CommandeclService,
    private route: Router,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.receivedRow= new Commandecl;
    this.commandeSelectionnee = new Commandecl();
    this.refreshCommandes();
    this.commandeclService.RequiredRefresh.subscribe(r => {
      this.refreshCommandes();
    })
  }

  
  loadCommande(commandecl:Commandecl){
    this.commandeclService.commande = Object.assign({},commandecl);
    console.log('cacommande loaded',commandecl);
  }
 

  refreshCommandes(){
    this.commandeclService.getCommandes().subscribe(result => {
      this.listCommandes = result;
      this.dataSource = new MatTableDataSource<Commandecl>(this.listCommandes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }




  Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  getCommande(id: number) {
    this.commandeSelectionnee = this.listCommandes.find((c) => c.Id == id);
    console.log(this.commandeSelectionnee);
  }
  
  public updateClient(id: number) {
   
    
  }

  deleteCommande(id:number){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.commandeclService.deleteCommande(id).subscribe((res) => {
      this.refreshCommandes();
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
     const dialogRef = this.dialog.open(DetcommandeclComponent,{width:'50%',height: '500px',
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
  openAddClientDialog(){
    let dialogRef= this.dialog.open(AddCommandeclComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }


}
