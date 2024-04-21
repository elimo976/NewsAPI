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
  cercaQuery: string = "";
  loading = false;
  messaggioErrore: string = "";

  constructor(private ls: LoginService) { }

  cerca(): void {
    const query = this.cercaQuery.trim();
    if (query !== "") {
      this.loading = true;
      this.ls.getNews(query)
        .subscribe({
          next: (data: Info) => {
            if (data.articles.length > 0) {
              this.cercaRisultato = data.articles;
              this.messaggioErrore = "";
            } else {
              this.messaggioErrore = "Non ci sono notizie per la chiave di ricerca inserita.";
            }
            this.loading = false;
          },
          error: (err: any) => {
            console.log(err);
            this.loading = false;
            this.messaggioErrore = "Si è verificato un errore durante la ricerca.";
          }
        });
    }
  }
}
