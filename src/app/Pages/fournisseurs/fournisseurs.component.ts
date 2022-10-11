import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/Models/fournisseur';
import { FournisseurService } from 'src/app/Shared/fournisseur.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
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
    private http: HttpClient,) { }

  ngOnInit(): void {
    
  }
  
}
