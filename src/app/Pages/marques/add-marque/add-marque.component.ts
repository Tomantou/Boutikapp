import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarqueService } from 'src/app/Shared/marque.service';
import { ProduitsService } from 'src/app/Shared/produit.service';
@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.css']
})
export class AddMarqueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public marqueservice: MarqueService) { }

  ngOnInit(): void {
  }

  onClear(){
    this.marqueservice.form.reset();
    this.marqueservice.initializeFormGroup();
  }
  

}
