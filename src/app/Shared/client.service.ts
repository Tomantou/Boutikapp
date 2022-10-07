import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpErrorResponse,  } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/categorie';
import { Client } from '../Models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private lien = environment.boutiqueContainer + 'api/clients';
  client: Client = new Client();
  clientAdded = new Subject();
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

  createClient(pvente: Object){
    console.log(pvente)
     return this.http.post<Client>(this.lien, pvente).pipe(tap(() => 
        {this.RequiredRefresh.next();} ));

  }

  getClients(): Observable<any> {
    return this.http.get<Client[]>(this.lien);
  }

  getClientById(id: number){
    return this.http.get(this.lien + '/' + id);
  }

  updateClient(id: number, client:Client){
    return this.http.put(this.lien + '/' + id, client);
  }
  
   deleteClient(id: number){
    return this.http.delete(this.lien + '/' + id );
   }
  
}
