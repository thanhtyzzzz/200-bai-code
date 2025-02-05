import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';
import { ICoindeskData } from '../interfaces/CoindeskData';

@Injectable({
  providedIn: 'root'
})
export class CoindeskService {
  private _url: string = '/bpi/currentprice.json'

  constructor(private _http: HttpClient) { }

  getCoindeskData() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    )

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    }

    return this._http.get<any>(this._url, requestOptions).pipe(
      map((res) => JSON.parse(res) as ICoindeskData),
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
