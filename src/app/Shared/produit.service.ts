import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject,tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/categorie';
import { Produit } from '../Models/produit';
import { Stock } from '../Models/stock';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  
  private lien = environment.boutiqueContainer + 'api/produits';
  private lien10 = environment.boutiqueContainer + 'api/produits/les10';
  private lien10rand = environment.boutiqueContainer + 'api/Produits/Rand10';
  produit: Produit = new Produit();
  produits: Produit[]=[]; 
   productAdded = new Subject();
   private _refreshRequired = new Subject<void>();
   get RequiredRefresh(){
    return this._refreshRequired;
   }
   
  constructor(
    private readonly http: HttpClient) { }
     
  form: FormGroup = new FormGroup({
    $Id: new FormControl(null),
    Nom: new FormControl('', Validators.required),
    Prix: new FormControl(),
    Photo: new FormControl(''),
    Nouveaute: new FormControl(''),
    Description: new FormControl(''),
    CategorieId: new FormControl('',Validators.required),
    MarqueId: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
    $Id: null,
    Nom: '',
    Prix: 0,
    Photo: '',
    Nouveaute: '',
    Description: '',
    CategorieId: '',
    MarqueId:''
  });
}

populateForm(produit:Produit){
  this.form.setValue(produit);
}
   
  getProduits(): Observable<any> {
    return this.http.get<Produit[]>(this.lien);
  }

  getTenRandomProduits(): Observable<any> {
    return this.http.get<Produit[]>(this.lien10rand);
  }

  getTenProduits(): Observable<any> {
    return this.http.get<Produit[]>(this.lien10);
  }

  saveProduit(produit: Produit): Observable<Produit> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<Produit>(this.lien, produit, requestOptions);
  }

// CRUD Operations

  createProduct(prod: Produit){
    console.log(prod)
     return this.http.post<Produit>(this.lien, prod).pipe(tap(() => 
        {this.RequiredRefresh.next();} ));

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