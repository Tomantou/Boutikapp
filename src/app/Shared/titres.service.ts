import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Titres } from '../Models/titres';

@Injectable({
  providedIn: 'root'
})
export class TitresService {
  private lien = environment.boutiqueContainer + '/titres';

  constructor(private readonly http: HttpClient) { }


  saveSignaletique(titres: Titres) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(environment.boutiqueContainer + '/titres', titres, requestOptions);
  }


  getTitres(): Observable<any>{
    return this.http.get<Titres[]>(this.lien);  
    // return this.http.get<Titres[]>(this.lien + '?filter={"limit": 1}');           
}

}
