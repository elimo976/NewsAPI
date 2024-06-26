import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    children: [
      { path: 'news', component: NewsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAppRoutingModule { }
