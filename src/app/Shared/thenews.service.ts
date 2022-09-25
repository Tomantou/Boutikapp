import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { News } from '../Models/news';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThenewsService {
  private lien = environment.boutiqueContainer + 'api/news';
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $Id: new FormControl(null),
    titre: new FormControl('', Validators.required),
    texte1: new FormControl('',Validators.required),
    texte2: new FormControl(''),
    image: new FormControl(''),
    Datepublication: new FormControl(''),
    publier: new FormControl(false,Validators.required)
  })

  initializeFormGroup(){
    this.form.setValue({
    $Id: null,
    titre: '',
    texte1: '',
    texte2: '',
    image: '',
    Datepublication: '',
    publier: false
  });

  }

  createNews(news: Object){
   
     return this.http.post<News>(this.lien, news)
     console.log(news)
  }

  getNews(): Observable<any> {
    return this.http.get<News[]>(this.lien);
  }

  getNewsById(id: number){
    return this.http.get(this.lien + '/' + id);
  }

  updateProduct(id: number, news:News){
    return this.http.put(this.lien + '/' + id, News);
  }

  deleteProduct(id: number){
    return this.http.delete(this.lien + '/' + id );
  }
 
}
