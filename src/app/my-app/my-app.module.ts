import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyAppRoutingModule } from './my-app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    MyAppRoutingModule,
    FormsModule
  ]
})
export class MyAppModule { }
