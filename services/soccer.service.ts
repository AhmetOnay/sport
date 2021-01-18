import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Soccer } from "../src/app/model/soccer";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SoccerService {
  // Base url
  baseurl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  // POST
  CreateSoccer(data): Observable<Soccer> {
    console.log("Data", data);
    return this.http
      .post<Soccer>(
        this.baseurl + "/soccer/",
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetSoccer(id): Observable<Soccer> {
    return this.http
      .get<Soccer>(this.baseurl + "/soccer/" + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetSoccers(): Observable<Soccer> {
    return this.http
      .get<Soccer>(this.baseurl + "/soccer/")
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // PUT
  UpdateSoccer(id, data): Observable<Soccer> {
    return this.http
      .put<Soccer>(
        this.baseurl + "/soccer/" + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // DELETE
  DeleteSoccer(id) {
    return this.http
      .delete<Soccer>(this.baseurl + "/soccer/" + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
