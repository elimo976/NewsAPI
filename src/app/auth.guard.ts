import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const userLoggato = localStorage.getItem('userLoggato');
    if (userLoggato) {
      return true; // L'utente è autenticato, consenti l'accesso
    } else {
      this.router.navigateByUrl('/login'); // Reindirizza l'utente al login se non è autenticato
      return false;
    }
  }
}
