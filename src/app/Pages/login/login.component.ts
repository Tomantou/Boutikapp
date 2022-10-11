import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthorizeService } from 'src/app/Shared/authorize.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  constructor(private authorizeService: AuthorizeService,
             private route:Router) {
    localStorage.clear();
   }

  ngOnInit() {
  }
   gotoAccueil(){
     this.route.navigate(['accueil']);
   }
  proceedLogin(){
    this.authorizeService.login({email: this.email, password: this.password}).subscribe(
      response => {
        localStorage.setItem("userid", response.id);
        localStorage.setItem("email", response.email);
        localStorage.setItem("password", response.password);
        localStorage.setItem("firstname", response.firstname);
        localStorage.setItem("lastname", response.lastname);
        localStorage.setItem("role", response.role);
        localStorage.setItem("username", response.username);
        window.open('/accueil', "_self");
      }
    )
  }

}
