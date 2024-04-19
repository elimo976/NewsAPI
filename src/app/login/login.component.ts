import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMessage: string = "";
  loggedMessage: string = "";

  constructor(private ls: LoginService) { }

  login(): void {
    this.ls.getAutenticazione()
      .subscribe({
        next: data => {
          const email = this.loginFrm.get('email')?.value;
          const storage = this.loginFrm.value.remember === true ? localStorage : sessionStorage;
          const password = this.loginFrm.get('password')?.value;
          const user = data.find((item: { username: string, password: string }) => item.username === email && item.password === password);

          if (user) {
            storage.setItem('userLoggato', JSON.stringify(user));
            console.log('Login riuscito:', user);
            this.loggedMessage = "Autenticazione riuscita";
            this.loginFrm.reset();
          } else {
            console.error("Email o password errati");
            this.errorMessage = "Email o password errati";
          }
        },
        error: err => {
          console.error("Errore durante il recupero dei dati di autenticazione", err);
        }
      });
  }

  loginFrm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
    remember: new FormControl(false)
  });
}
