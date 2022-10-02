import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StockService } from 'src/app/Shared/stock.service';
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {


  form: FormGroup = new FormGroup({
    Id: new FormControl('', Validators.required),
    Quantite: new FormControl(0),
    QuantiteMin: new FormControl(0),
    QuantiteMax: new FormControl(0),
    PventeId: new FormControl('',Validators.required),
    ProduitId: new FormControl('',Validators.required)
    
  });

  initializeFormGroup(){
    this.form.setValue({
    Id: '',
    Quantite: 0,
    QuantiteMin: 0,
    QuantiteMax: 0,
    PventeId: '',
    ProduitId: ''
    
  });
}

  constructor(public stockservice:StockService,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
  }

  onClear(){
    this.stockservice.form.reset();
    this.stockservice.initializeFormGroup();
  }
  

}
