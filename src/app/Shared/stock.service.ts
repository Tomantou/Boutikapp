import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpErrorResponse,  } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/categorie'
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  private lien = environment.boutiqueContainer + '/stocks';

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

  geetCategories(): Observable<any>{
     return this.http.get<Categorie[]>(this.lien);
   }

  
  form: FormGroup = new FormGroup({
    $id: new FormControl(null),
    quantite: new FormControl(0),
    quantitemin: new FormControl(0),
    quantitemax: new FormControl(0),
    pventeid: new FormControl('', Validators.required),
    produitid: new FormControl('',Validators.required),
    
  });

  initializeFormGroup(){
    this.form.setValue({
    $id: null,
    quantite: 0,
    quantitemin: '',
    quantitemax: '',
    pventeid: '',
    produitid: ''
  
  });
}
}
