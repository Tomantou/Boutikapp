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
  private lien = environment.boutiqueContainer + 'api/produits';
   productAdded = new Subject();
   
  constructor(
    private readonly http: HttpClient) { }
   
  getProduits(): Observable<any> {

    return this.http.get<Produit[]>(this.lien + '/all');
    

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
    return this.http.post<Response>(this.lien + '/produits', produit, requestOptions);
  }

// CRUD Operations

  createProduct(obj: any){
    console.log(obj)
     return this.http.post<Produit>(this.lien, obj)

  }

  updateImage(image: File, prodId: number) {
    if (image === undefined) {
        return null;
    }
    const formData = new FormData();
    formData.append('image', image);
    return this.http.put(this.lien + '/' + prodId + '/photo', formData);
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