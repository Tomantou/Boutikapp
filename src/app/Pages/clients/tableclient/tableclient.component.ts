import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { ClientService } from 'src/app/Shared/client.service';
import { AddClientComponent } from '../add-client/add-client.component';
import * as alertifyjs from 'alertifyjs';
import { DetailClientComponent } from '../detail-client/detail-client.component';
@Component({
  selector: 'app-tableclient',
  templateUrl: './tableclient.component.html',
  styleUrls: ['./tableclient.component.css']
})
export class TableclientComponent implements OnInit {
  public listClients: Client[] = [];
  public clientSelectionne: any;
  receivedRow:any;

  displayedColumns: string[] = ['id','nom','prenoms','adresse','contact','email','codepostal','ville','civilite','actions'];
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  showDataOfChildComponent: any;

  constructor(private dialog: MatDialog,
    private clientService:ClientService,
    private router: Router,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.receivedRow= new Client;
    this.clientSelectionne = new Client();
    this.refreshClients();
    this.clientService.RequiredRefresh.subscribe(r => {
      this.refreshClients();
    })
  }

  loadClient(client:Client){
    this.clientService.client = Object.assign({},client);
    console.log('categorie loaded',client);
  }
 

  refreshClients(){
    this.clientService.getClients().subscribe(result => {
      this.listClients = result;
      this.dataSource = new MatTableDataSource<Client>(this.listClients);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }




  Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  getClient(id: number) {
    this.clientSelectionne = this.listClients.find((g) => g.id == id);
    console.log(this.clientSelectionne);
  }
  
  public updateClient(id: number) {
   
    
  }

  deleteClientt(id:number){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.clientService.deleteClient(id).subscribe((res) => {
      this.refreshClients();
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
     const dialogRef = this.dialog.open(DetailClientComponent,{width:'50%',height: '500px',
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
    let dialogRef= this.dialog.open(AddClientComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }


}
