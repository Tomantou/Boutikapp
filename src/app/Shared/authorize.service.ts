import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../Models/Users';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

name:any;
pwd:any;

private lien = environment.boutiqueContainer + 'api/users';

  constructor(private http:HttpClient) { }

  login(user: any){
     return this.http.post<any>(this.lien + "/login", user);
  }

  register(user: Users){
    return this.http.post<Users>(this.lien + "/register", user)
  }

  hasToken(){
    return localStorage.getItem("email") && localStorage.getItem("password")
  }
  getToken(){
    return localStorage.getItem("email") + ":" + localStorage.getItem("password")
  }

}


