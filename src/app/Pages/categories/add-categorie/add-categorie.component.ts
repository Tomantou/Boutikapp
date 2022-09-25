import { Component, Inject, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/Shared/categorie.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  constructor(public categorieservice: CategorieService,
                    @Inject(MAT_DIALOG_DATA) public data: any,
              ) { }

  ngOnInit(): void {
  }

  onClear(){
    this.categorieservice.form.reset();
    this.categorieservice.initializeFormGroup();
  }

}
