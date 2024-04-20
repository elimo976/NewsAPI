import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(private router: Router, private ls: LoginService) { }
  logout() {

    this.ls.getAutenticazione()
      .subscribe({
        next: data => {
          sessionStorage.clear();
          localStorage.removeItem("userLoggato");
          // this.router.navigateByUrl("/login");
        }
      })
  }

}
