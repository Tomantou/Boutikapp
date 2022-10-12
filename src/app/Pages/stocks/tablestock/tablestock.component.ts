import { Component, OnInit, ViewChild } from '@angular/core';
import { AddStockComponent } from '../add-stock/add-stock.component';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { StockService } from 'src/app/Shared/stock.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as alertifyjs from 'alertifyjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Stock } from 'src/app/Models/stock';



@Component({
  selector: 'app-tablestock',
  templateUrl: './tablestock.component.html',
  styleUrls: ['./tablestock.component.css']
})
export class TablestockComponent implements OnInit {
  public lesstocks: Stock[] = [];
  public selectedStock: any;
  EditData:any;
  Stockid:any;

  displayedColumns: string[] = ['id','quantite','quantitemin','quantitemax','pventeid','produitid','actions'];
  stateSpinner = false;
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog:MatDialog,
              private stockservice:StockService,
              private router: Router,
              private http: HttpClient,
              ) { }

  ngOnInit(): void {
    this.selectedStock = new Stock();
    this.refreshStocks();
    this.stockservice.RequiredRefresh.subscribe(r => {
      this.refreshStocks();
    })
  }

  refreshStocks(){
    this.stockservice.getStocks().subscribe(result => {
      this.lesstocks = result;
      this.dataSource = new MatTableDataSource<Stock>(this.lesstocks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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

  delStock(id: string){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.stockservice.deleteStock(id).subscribe((res) => {
      this.refreshStocks();
      alertifyjs.success('produit supprimé avec succès');
    });},
     function(){alertifyjs.success('suppression produit annulée');})
  }

  openAddstockDialog(){
    let dialogRef= this.dialog.open(AddStockComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }

  openDetailStockDialog(){

  }

  


}
