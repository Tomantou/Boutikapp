import { Component, Input, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments'
@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css']
})
export class PayerComponent implements OnInit {
  @Input() Totmont:number;
  @Input() numCmde:number;
  /*@Input() detailsCmde; */
  constructor() {
    render(
      {
        id:"myPaypalButtons",
        currency:'Euro',
        value:'1000.00',
        onApprove:(details) =>{
          alert("transaction successfull");
         }
      }

    );
  }

  ngOnInit(): void {
  }

}

 

