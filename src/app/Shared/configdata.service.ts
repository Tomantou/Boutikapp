import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpErrorResponse,  } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/categorie';
import { ConfigdataComponent } from '../Pages/configdata/configdata.component';
import { Configdata } from '../Models/configdata';



@Injectable({
  providedIn: 'root'
})

export class ConfigdataService {
  private lien = environment.boutiqueContainer + 'api/configdatas';

  constructor(private readonly http: HttpClient) 
  {
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

  saveSignaletique(configdat: Configdata) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<Configdata>(this.lien, configdat, requestOptions);
  }


  getSignaletique(): Observable<any>{
    return this.http.get<Configdata[]>(this.lien);       //+ '?filter={"limit": 1}'    
}


}
