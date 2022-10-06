import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Pvente } from 'src/app/Models/pvente';
import { PventeService } from 'src/app/Shared/pvente.service';
import { AddPventeComponent } from '../add-pvente/add-pvente.component';
import * as alertifyjs from 'alertifyjs';
import { MatTableDataSource } from '@angular/material/table';
import { DetailPventeComponent } from '../detail-pvente/detail-pvente.component';
@Component({
  selector: 'app-tablepvente',
  templateUrl: './tablepvente.component.html',
  styleUrls: ['./tablepvente.component.css']
})
export class TablepventeComponent implements OnInit {
  public listPventes: Pvente[] = [];
  public pventeSelectionnee: any;
  receivedRow:any;

  displayedColumns: string[] = ['id','adresse','contact','email','codepostal','ville','gerantId','actions'];
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  showDataOfChildComponent: any;


  constructor(private dialog: MatDialog,
    private pventeService:PventeService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.receivedRow= new Pvente;
    this.pventeSelectionnee = new Pvente();
    this.refreshPventes();
    this.pventeService.RequiredRefresh.subscribe(r => {
      this.refreshPventes();
    })
  }

  loadGerant(pvente:Pvente){
    this.pventeService.pvente = Object.assign({},pvente);
    console.log('categorie loaded',pvente);
  }
 

  refreshPventes(){
    this.pventeService.getPventes().subscribe(result => {
      this.listPventes = result;
      this.dataSource = new MatTableDataSource<Pvente>(this.listPventes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }




  Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  getGerant(id: number) {
    this.pventeSelectionnee = this.listPventes.find((g) => g.id == id);
    console.log(this.pventeSelectionnee);
  }
  
  public updateMarque(id: number) {
   
    
  }

  deletePvente(id:number){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.pventeService.deletePvente(id).subscribe((res) => {
      this.refreshPventes();
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
     const dialogRef = this.dialog.open(DetailPventeComponent,{width:'50%',height: '500px',
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
    let dialogRef= this.dialog.open(AddPventeComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }


}
