import { Component, OnInit } from '@angular/core';
import { PanierComponent } from '../panier/panier.component';
import { AuthorizeService } from 'src/app/Shared/authorize.service';
import { Users } from 'src/app/Models/Users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:Users= new Users;
  id=0;
  email = "";
  password = "";
  username="";
  firstname="";
  lastname="";
  role="";
  constructor(private authorizeService: AuthorizeService,
              private route:Router) { }

  ngOnInit(): void {
  }

  proceedRegister(){
      this.user.id =this.id;
      this.user.email= this.email;
      this.user.password=this.password;
      this.user.username= this.username;
      this.user.firstname=this.firstname;
      this.user.lastname=this.lastname;
      this.user.role=this.role;
      console.log('user',this.user);
    this.authorizeService.register({
      email: this.email, password: this.password,
      username: this.username, firstname: this.firstname,
      lastname: this.lastname, role: this.role,
      id: 0
    }).subscribe(
      response => {
        window.open('/login', "_self");
      }
    )
  }


  gotoAccueil(){
    this.route.navigate(['accueil']);
  }
}
