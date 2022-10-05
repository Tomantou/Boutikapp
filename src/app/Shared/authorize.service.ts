import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
name:any;
pwd:any;

private lien = environment.boutiqueContainer + 'api/Users';

  constructor(private http:HttpClient) { }

  login(user: Object){
     return this.http.post<any>(this.lien + "/login", user);
  }

  hasToken(){
    return localStorage.getItem("email") && localStorage.getItem("password")
  }
  getToken(){
    return localStorage.getItem("email") + ":" + localStorage.getItem("password")
  }

}


