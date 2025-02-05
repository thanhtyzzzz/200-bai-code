import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';
import { IPublicAPIItem } from '../interfaces/PublicAPIItem';

@Injectable({
  providedIn: 'root'
})
export class ListPublicApisService {
  private _url: string = '/entries';

  constructor(private _http: HttpClient) { }

  getListPublicAPIs() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    )

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    }

    return this._http.get<any>(this._url, requestOptions).pipe(
      map((res) => JSON.parse(res) as IPublicAPIItem),
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
