import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editfacture',
  templateUrl: './editfacture.component.html',
  styleUrls: ['./editfacture.component.css']
})
export class EditfactureComponent implements OnInit {
  Date = new FormControl;
  Statut = new FormControl;
  ClientId = new FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
