import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TableproductComponent } from '../tableproduct/tableproduct.component';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  receivedRow:any;

  constructor(public dialogRef: MatDialogRef<DetailProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    
              ) {}
  

  ngOnInit(): void {
    console.log('entrée détail');
    this.receivedRow=this.data;
  }


  gotoProduitClick(): void{
    
    // this.router.navigate(['produits']);
 }
}
