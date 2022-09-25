import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/Shared/categorie.service';
@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

  constructor(public categorieservice: CategorieService) { }

  ngOnInit(): void {
  }

  onClear(){

  }

}
