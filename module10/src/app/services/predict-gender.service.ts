import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';
import { IGender } from '../interfaces/Gender';
@Injectable({
  providedIn: 'root'
})
export class PredictGenderService {
  private _url = '/genderize?name='

  constructor(private _http: HttpClient) { }

  getGender(name: string) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    )

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    }

    return this._http.get<any>(this._url + name, requestOptions).pipe(
      map((res) => JSON.parse(res) as IGender),
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
