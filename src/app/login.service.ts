import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autenticazione } from './models/autenticazione';
import { environment } from 'src/environments/environment.development';
import { Articolo, Info } from './models/articolo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": environment.SERVER_API_KEY
    })
  }
  getAutenticazione(): Observable<Autenticazione[]> {
    return this.http.get<Autenticazione[]>(`${environment.JS_BASE_URL}`)
  }

  getNews(query: string): Observable<Info> {
    return this.http.get<Info>(`${environment.NEWSAPI_BASE_URL}${query}`, this.httpOptions)
  }

}
