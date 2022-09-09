import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottompventesrefComponent } from '../bottompventesref/bottompventesref.component';

@Component({
  selector: 'app-bottompventes',
  templateUrl: './bottompventes.component.html',
  styleUrls: ['./bottompventes.component.css']
})
export class BottompventesComponent implements OnInit {

  constructor(private lstpvbottom: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openListpventes(){
     this.lstpvbottom.open(BottompventesrefComponent)
  }

}
