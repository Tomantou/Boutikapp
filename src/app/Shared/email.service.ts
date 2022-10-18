import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailDto } from '../Models/EmailDto';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private lien = environment.boutiqueContainer + 'api/Email';

  constructor(private http:HttpClient) { }

emailSend(mail:EmailDto){
  return this.http.post<EmailDto>(this.lien, mail);
  }
}