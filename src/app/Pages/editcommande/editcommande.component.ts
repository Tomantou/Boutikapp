import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editcommande',
  templateUrl: './editcommande.component.html',
  styleUrls: ['./editcommande.component.css']
})
export class EditcommandeComponent implements OnInit {
  Date = new FormControl;
  Total = new FormControl;
  Adresselivraison = new FormControl;
  Statut = new FormControl;
  ClientId = new FormControl;
  PventeId = new FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
