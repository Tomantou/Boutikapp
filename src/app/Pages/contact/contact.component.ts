import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nom:String;
  prenoms:String;
  adresse1:string;
  adresse2:string;
  ville:string;
  codepostal:string;
  message:string;
  
  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }

  gotoAccuelClick(){
    alertifyjs.success('Transaction abandonnée!');
    this.route.navigate(['accueil']);
  }

  onSubmit(){

  }

}
