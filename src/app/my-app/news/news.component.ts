import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Articolo, Info, InfoDTO } from 'src/app/models/articolo';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent {
  cercaRisultato: Articolo[] = [];
  loading = false;
  messaggioErrore: string = "";

  constructor(private ls: LoginService) { }

  cerca(event: any): void {
    const query = event.target.value.trim();
    if (query !== "") {
      this.loading = true;
      this.ls.getNews(query)
        .subscribe({
          next: (data: Info) => {
            this.cercaRisultato = data.articles;
            this.loading = false;
          },
          error: (err: any) => {
            console.log(err);
            this.loading = false;
            this.messaggioErrore = "Non ci sono notizie per la chiave di ricerca inserita";
          }
        });
    }
  }
}
