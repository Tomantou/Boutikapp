import { Component, OnInit } from '@angular/core';
import { Pvente } from 'src/app/Models/pvente';
import { PventeService } from 'src/app/Shared/pvente.service';

@Component({
  selector: 'app-bottompventesref',
  templateUrl: './bottompventesref.component.html',
  styleUrls: ['./bottompventesref.component.css']
})
export class BottompventesrefComponent implements OnInit {
lesPventes: Pvente []=[];
  constructor(private pventeservice:PventeService) { }

  ngOnInit(): void {
    this.pventeservice.getPventes().subscribe(
      (pventes) => {this.lesPventes= pventes;
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  
  }

}
