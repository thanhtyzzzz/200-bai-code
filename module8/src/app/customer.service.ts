import { Injectable } from '@angular/core';
import { ICustomer } from './icustomer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _url:string="./assets/data/customers.json"; 

  constructor(private _http: HttpClient) { }
  getProducts():Observable<ICustomer[]>{
  return this._http.get<ICustomer[]>(this._url)
  }
  getProductsHandleError()
  {
  return this._http.get<ICustomer[]>(this._url)
  .pipe(retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
}
