import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editmarque',
  templateUrl: './editmarque.component.html',
  styleUrls: ['./editmarque.component.css']
})
export class EditmarqueComponent implements OnInit {
  Nom = new FormControl;
  Origine = new FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
