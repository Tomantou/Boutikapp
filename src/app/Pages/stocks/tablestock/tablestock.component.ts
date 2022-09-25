import { Component, OnInit } from '@angular/core';
import { AddStockComponent } from '../add-stock/add-stock.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-tablestock',
  templateUrl: './tablestock.component.html',
  styleUrls: ['./tablestock.component.css']
})
export class TablestockComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openAddstockDialog(){
    let dialogRef= this.dialog.open(AddStockComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }

}
