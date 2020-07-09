import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';



import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'login', component: LoginPageComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,    
    LandingPageComponent, LoginPageComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [AuthServiceService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/