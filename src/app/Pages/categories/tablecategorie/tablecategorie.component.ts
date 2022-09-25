import { Component, OnInit } from '@angular/core';
import { AddCategorieComponent } from '../add-categorie/add-categorie.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tablecategorie',
  templateUrl: './tablecategorie.component.html',
  styleUrls: ['./tablecategorie.component.css']
})
export class TablecategorieComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddcategorieDialog(){
    let dialogRef= this.dialog.open(AddCategorieComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }


}
