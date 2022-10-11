import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottompventesrefComponent } from '../bottompventesref/bottompventesref.component';
import { Pvente } from 'src/app/Models/pvente';
import { PventeService } from 'src/app/Shared/pvente.service';
@Component({
  selector: 'app-bottompventes',
  templateUrl: './bottompventes.component.html',
  styleUrls: ['./bottompventes.component.css']
})
export class BottompventesComponent implements OnInit {
lesPventes: Pvente [] = [];
  constructor(private lstpvbottom: MatBottomSheet,
    private pventeservice:PventeService) { }

  ngOnInit(): void {
    this.pventeservice.getPventes().subscribe((pventes) =>{
       this.lesPventes = pventes;
    })
  }

  openListpventes(){
     this.lstpvbottom.open(BottompventesrefComponent)
  }

}
