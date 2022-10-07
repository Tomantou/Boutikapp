import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { News } from '../Models/news';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThenewsService {
  private lien = environment.boutiqueContainer + 'api/news';
  news:News = new News;

  marqueAdded = new Subject();
  private _refreshRequired = new Subject<void>();
  get RequiredRefresh(){
   return this._refreshRequired;

  }
  constructor(private http: HttpClient) { }

  
  createNews(news: News): Observable<News>{
   
     return this.http.post<News>(this.lien, news)
     console.log(news)
  }

  getNews(): Observable<any> {
    return this.http.get<News[]>(this.lien);
  }

  getNewsById(id: number){
    return this.http.get(this.lien + '/' + id);
  }

  updateNews(id: number, news:News){
    return this.http.put(this.lien + '/' + id, News);
  }

  deleteNews(id: number){
    return this.http.delete(this.lien + '/' + id );
  }
 
}
