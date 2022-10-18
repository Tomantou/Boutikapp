import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MAT_RANGE_DATE_SELECTION_MODEL_FACTORY } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paniers } from '../Models/Paniers';
import { Produit } from '../Models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private lien = environment.boutiqueContainer + 'api/panier';

  constructor(private readonly http: HttpClient) { }

  confirm(userid: string): Observable<any> {
    return this.http.get<any[]>(this.lien + "/user/" + userid + "/confirm");
  }
  cancel(userid: string): Observable<any> {
    return this.http.get<any[]>(this.lien + "/user/" + userid + "/cancel");
  }
  getPaniers(userid: string): Observable<any> {
    return this.http.get<any[]>(this.lien + "/user/" + userid);
  }
  create(panier: Paniers): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<any[]>(this.lien, panier, requestOptions);
  }

  //quantity
  add(id: string): Observable<any> {
    return this.http.get<any[]>(this.lien + "/" + id + "/add/");
  }
  decrease(id: string): Observable<any> {
    return this.http.get<any[]>(this.lien + "/" + id + "/decrease/");
  }
  delete(id: string): Observable<any> {
    return this.http.delete<any[]>(this.lien + "/" + id);
  }

}
