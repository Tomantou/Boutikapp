import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpErrorResponse,  } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/categorie';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
categorie:Categorie = new Categorie;
private lien = environment.boutiqueContainer + 'api/Categories';

  categorieAdded = new Subject();
  private _refreshRequired = new Subject<void>();
  get RequiredRefresh(){
   return this._refreshRequired;

  }

  constructor(private readonly http: HttpClient) { 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
   /*  this.people = http.get('http://www.mocky.io/v2/5715f1f3a1100004d1187d9e1', { headers: headers })
   .map(response => response.json()); */
  }

  // Handling errors
  
  private handleError(errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent){
       console.error('Erreur coté client: ', errorResponse.error.message);
    }else
     {
         console.error('Erreur coté serveur: ', errorResponse);
     }

  }

  getCategories(): Observable<any>{
     return this.http.get<Categorie[]>(this.lien);
   }

  
  
// CRUD Operations

  creerCategorie(categorie: Object){
    console.log(categorie)
     return this.http.post<Categorie>(this.lien, categorie).pipe(tap(() => 
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

  recupCategorieParId(id: number){
    return this.http.get(this.lien + '/' + id);
  }

  editerCategorie(id: number, cat:Categorie){
    return this.http.put(this.lien + '/' + id, cat);
  }

  supprimerCategorie(id: number){
    return this.http.delete(this.lien + '/' + id );
  
  }

  form: FormGroup = new FormGroup({
    $id: new FormControl(null),
    libelle: new FormControl('', Validators.required)
  })

  initializeFormGroup(){
    this.form.setValue({
    $Id: null,
    libelle: ''
  })
}
   
  
}
