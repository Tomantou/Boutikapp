import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpErrorResponse,  } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/categorie';
import { Fournisseur } from '../Models/fournisseur';


@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private lien = environment.boutiqueContainer + 'api/fournisseurs';
  fournisseur: Fournisseur = new Fournisseur();
  FournisseurAdded = new Subject();
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

  
  createFournisseur(fourn: Fournisseur){
    console.log(fourn)
     return this.http.post<Fournisseur>(this.lien, fourn).pipe(tap(() => 
        {this.RequiredRefresh.next();} ));

  }

  getFournisseurs(): Observable<any> {
    return this.http.get<Fournisseur[]>(this.lien);
  }

  getFournisseurById(id: number){
    return this.http.get(this.lien + '/' + id);
  }

  updateFournisseur(id: number, client:Fournisseur){
    return this.http.put(this.lien + '/' + id, client);
  }
  
   deleteFournisseur(id: number){
    return this.http.delete(this.lien + '/' + id );
   }

}
