import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Shared/client.service';
import * as alertifyjs from 'alertifyjs';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(public clientservice:ClientService) { }

  ngOnInit(): void {
  }

  public createClient() {
    this.clientservice.createClient(this.clientservice.form.getRawValue()).subscribe({
          next: (client) => {
            console.log(this.clientservice.form.value);
            alertifyjs.success('clientt enregistré avec succès');
          },
          error:() =>{alertifyjs.error('échec enrengistrement, entrez des données valides svp!');
        },
    });
   }


   onClear(){
    this.clientservice.form.reset();
    this.clientservice.initializeFormGroup();
  }
}
