import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpErrorResponse,  } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/categorie';
import { Gerant } from '../Models/gerant';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class GerantService {
  private lien = environment.boutiqueContainer + 'api/gerants';
  gerant:Gerant = new Gerant;
  
  gerantAdded = new Subject();
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

  recupererGerants(): Observable<any>{
    return this.http.get<Gerant[]>(this.lien);
  }
  

// CRUD Operations

creerGerant(Gerant: Object){
  console.log(this.gerant)
   return this.http.post<Gerant>(this.lien, this.gerant).pipe(tap(() => 
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

recupGerantParId(id: number){
  return this.http.get(this.lien + '/' + id);
}

editerGerant(id: number, gerant:Gerant){
  return this.http.put(this.lien + '/' + id, gerant);
}

supprimerGerant(id: number){
  return this.http.delete(this.lien + '/' + id );

}

  form: FormGroup = new FormGroup({
   $id: new FormControl(0),
   Categorie: new FormControl(''),
   nom: new FormControl('', Validators.required),
   Prenom: new FormControl('', Validators.required),
   Contact: new FormControl('', Validators.required),
   Email: new FormControl('',Validators.required)
   
 });

 
}
