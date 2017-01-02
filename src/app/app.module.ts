import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';

import { UsersModule } from './users/users.module';
import { CoreModule }   from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,           //Singleton objects (services, components that are loaded only once, etc.)
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
