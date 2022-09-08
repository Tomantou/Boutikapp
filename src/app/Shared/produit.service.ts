import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/categorie';
import { Produit } from '../Models/produit';
import { Stock } from '../Models/stock';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private lien = environment.boutiqueContainer + '/produits';
   productAdded = new Subject();
  constructor(
    private readonly http: HttpClient) { }

    public getById(id: number) {
      const filter = '{"where": {"Id": "' + id + '"}}'
      return this.http.get<Produit[]>(this.lien + "?filter=" + filter);
    }
   
  getProduits(): Observable<any> {

    return this.http.get<Produit[]>(this.lien + '?filter={"limit": 100}');
    

  }

  saveProduit(produit: Produit): Observable<Response> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<Response>(environment.boutiqueContainer + '/produits', produit, requestOptions);
  }

// CRUD Operations

  createProduct(obj: any){
     return this.http.post(environment.boutiqueContainer + '/produits', obj)

  }

  getLatestProducts(){

  }

  getProductById(id: number){
    return this.http.get(this.lien + '/' + id);
  }

  updateProduct(id: number, prod:Produit){
    return this.http.put(this.lien + '/' + id, prod);
  }

  deleteProduct(id: number){
    return this.http.delete(this.lien + '/' + id );
  }
}