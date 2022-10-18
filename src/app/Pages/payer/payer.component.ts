import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { EmailDto } from 'src/app/Models/EmailDto';
import { EmailService } from 'src/app/Shared/email.service';

@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css']
})
export class PayerComponent implements AfterContentInit {
  email: EmailDto = new EmailDto;
  @Input() total:number;
  @Input() numCmde:number;
  /*@Input() detailsCmde; */
  constructor(private emailservice:EmailService,
               private route:Router) {   
  }

  ngAfterContentInit(): void {
    render(
      {
        id:"#payments",
        currency:'EUR',
        value:'1000.00',
        onApprove:(details) =>{
          alert("transaction successfull");
         }
      }
    );
  }



  gotoAccuelClick(){
    this.route.navigate(['accueil']);
  }

}

 

