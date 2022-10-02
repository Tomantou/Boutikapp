import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produit } from 'src/app/Models/produit';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DetailsComponent>,
             @Inject(MAT_DIALOG_DATA) public data:any) { }
  result:any;
  ngOnInit(): void {
   this.result=this.data;
  }

}
