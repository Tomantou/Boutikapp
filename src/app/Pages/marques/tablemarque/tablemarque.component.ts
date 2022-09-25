import { Component, OnInit } from '@angular/core';
import { AddProduitComponent } from '../../produits/add-produit/add-produit.component';
import { AddMarqueComponent } from '../add-marque/add-marque.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-tablemarque',
  templateUrl: './tablemarque.component.html',
  styleUrls: ['./tablemarque.component.css']
})
export class TablemarqueComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddmarqueDialog(){
    let dialogRef= this.dialog.open(AddMarqueComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }

}
