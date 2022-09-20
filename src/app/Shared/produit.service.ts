import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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
   productAdded = new Subject();
   
  constructor(
    private readonly http: HttpClient) { }

    
  form: FormGroup = new FormGroup({
    $id: new FormControl(null),
    nom: new FormControl('', Validators.required),
    prix: new FormControl(),
    photo: new FormControl(''),
    nouveaute: new FormControl(''),
    description: new FormControl(''),
    categorieid: new FormControl('',Validators.required),
    marqueid: new FormControl('',Validators.required)
  })

  initializeFormGroup(){
    this.form.setValue({
    $Id: null,
    nom: '',
    prix: 0,
    photo: '',
    nouveaute: '',
    description: '',
    categorieid: '',
    marqueid:''
  });
}
   
  getProduits(): Observable<any> {

    return this.http.get<Produit[]>(this.lien);
    

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

  createProduct(prodt: Object){
    console.log(prodt)
     return this.http.post<Produit>(this.lien, prodt)

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