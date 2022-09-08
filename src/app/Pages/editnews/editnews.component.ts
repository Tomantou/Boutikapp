import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.css']
})
export class EditnewsComponent implements OnInit {
  Titre = new FormControl;
  Soustitre = new FormControl;
  Texte = new FormControl;
  Image = new FormControl;
  Datepublication = new FormControl;
  Publier = new FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
