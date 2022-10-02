import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name:any;
pwd:any;
customerid:any;

  constructor() {
    localStorage.clear();
   }
   login = new FormGroup(
    {
     email: new FormControl('',[Validators.required, Validators.email]),
     password: new FormControl('',[Validators.required, Validators.minLength(6)])
    }
 );

  ngOnInit() {
  }

  proceedLogin(){
     if(this.login.valid){
      
     }
  }

  onLogin(){

    
  }

}
