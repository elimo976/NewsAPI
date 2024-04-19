import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autenticazione } from './models/autenticazione';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getAutenticazione(): Observable<Autenticazione[]> {
    return this.http.get<Autenticazione[]>(`${environment.JS_BASE_URL}`)
  }

}
