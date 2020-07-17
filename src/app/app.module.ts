import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AuthServiceService } from "./auth-service.service";
import { MainPageComponent } from "./main-page/main-page.component";
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { ErrorInterceptor } from "./_helpers/error.interceptor";
import { UserService } from "./user.service";
import { AuthGuard } from "./_helpers/auth.guard";
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: LandingPageComponent },
      {
        path: "login",
        component: LoginPageComponent
      },
      { path: "main", component: MainPageComponent, canActivate: [AuthGuard] },

      // otherwise redirect to home
      { path: "**", redirectTo: "" }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LandingPageComponent,
    LoginPageComponent,
    MainPageComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthServiceService,
    UserService
  ]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
