// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';


import { PeopleAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule
  ],
  declarations: [
    PeopleAppComponent
  ],
  providers: [ ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
