import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpErrorResponse,  } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stock } from '../Models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private lien = environment.boutiqueContainer + 'api/stocks';

  stockAdded = new Subject();
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

  createStock(stock: Object){
    console.log(stock)
     return this.http.post<Stock>(this.lien, stock).pipe(tap(() => 
        {this.RequiredRefresh.next();} ));

  }

  getProduits(): Observable<any> {
    return this.http.get<Stock[]>(this.lien);
  }

  getStockById(id: string){
    return this.http.get(this.lien + '/' + id);
  }

  updateStock(id: string, stock:Stock){
    return this.http.put(this.lien + '/' + id, stock);
  }

  getStocks(): Observable<any>{
     return this.http.get<Stock[]>(this.lien);
   }

  
   deleteStock(id: string){
    return this.http.delete(this.lien + '/' + id );
   }
  
  form: FormGroup = new FormGroup({
    Id: new FormControl(''),
    Quantite: new FormControl(0),
    QuantiteMin: new FormControl(0),
    QuantiteMax: new FormControl(0),
    PventeId: new FormControl(''),
    ProduitId: new FormControl('')
    
  });

  initializeFormGroup(){
    this.form.setValue({
    Id: null,
    Quantite: 0,
    QuantiteMin: '',
    QuantiteMax: '',
    PventeId: '',
    ProduitId: ''
  
  });
}
}
