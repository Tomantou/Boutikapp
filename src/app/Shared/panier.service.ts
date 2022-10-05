import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../Models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private lien = environment.boutiqueContainer + 'api/panier';

  constructor(private readonly http: HttpClient) { }

  getPaniers(userid: string): Observable<any> {
    return this.http.get<any[]>(this.lien + "/user/" + userid);
  }
  add(id: string): Observable<any> {
    return this.http.get<any[]>(this.lien + "/" + id + "/add/");
  }
  decrease(id: string): Observable<any> {
    return this.http.get<any[]>(this.lien + "/" + id + "/decrease/");
  }

}
