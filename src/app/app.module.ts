import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule     //Main routes for application
    ],
  declarations: [
    AppComponent
    ],
  bootstrap: [
   AppComponent
  ]
})
export class AppModule { }
