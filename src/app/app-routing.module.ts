import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

const app_routes: Routes = [
    { path: '', pathMatch:'full', redirectTo: '/home' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
    { path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
    { path: '**', pathMatch:'full', redirectTo: '/home' } //catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
