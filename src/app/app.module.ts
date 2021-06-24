import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app-routing/app-routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './page-component/login/login.component';
import { HomeComponent } from './page-component/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {useHash: true, relativeLinkResolution: 'legacy'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
