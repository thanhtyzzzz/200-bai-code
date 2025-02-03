import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
  private _url:string="./assets/data/products.json"; //Correct Lini Ex90
  // private _url:string="./assets/data/productsXXX.json"; //Error link Ex91

  constructor(private _http: HttpClient) { }
  getProducts():Observable<IProduct[]>{
  return this._http.get<IProduct[]>(this._url)
  }
  getProductsHandleError()
  {
  return this._http.get<IProduct[]>(this._url)
  .pipe(retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
  }
