import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Products } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = "http://127.0.0.1:8000/products/";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    let errorString = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      errorString = "Network Error"
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        errorString = `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorString));
  }

  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(`${this.URL}show`).pipe(
      catchError(this.handleError)
    );
  }

}
