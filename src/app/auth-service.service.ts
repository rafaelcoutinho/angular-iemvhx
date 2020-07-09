import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpClientModule, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class AuthServiceService {
  constructor(private http: HttpClient) {}
  
  public authenticate(email, password) : Observable<HttpResponse<any>> {
    var authInfo = btoa(email+":"+password);
    var httpOptions = {
      //reportProgress:true,
      headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Basic " + authInfo
      })
  };
  
    return this.http
      .post<any>("http://localhost:8080/conprees_server/rest/oauth2/default/v1/token", "",httpOptions)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};
}
