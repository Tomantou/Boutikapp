import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
name:any;
pwd:any;

  constructor(private http:HttpClient) { }

getAuthToken(){

}

}


