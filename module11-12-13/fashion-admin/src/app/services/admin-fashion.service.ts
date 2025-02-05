import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion } from '../interfaces/Fashion';

@Injectable({
  providedIn: 'root'
})
export class AdminFashionService {

  constructor(private _http: HttpClient) { }

  // get all fashion
  getFashions(): Observable<any> {
    // Đặt header "Content-Type" để yêu cầu dữ liệu dạng text
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text" // Xác định kiểu phản hồi là text
    }
    // Gửi GET request đến "/api/fashions" để lấy danh sách tất cả các fashion
    return this._http.get<any>("/api/fashions", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion>), // Chuyển đổi dữ liệu nhận về từ text thành mảng Fashion
      retry(3), // Thử lại tối đa 3 lần nếu gặp lỗi
      catchError(this.handleError) // Xử lý lỗi trong quá trình gọi API
    );
  }

  // get fashion by id
  getFashion(fashionId: string): Observable<any> {
    // Đặt header "Content-Type" để yêu cầu dữ liệu dạng text
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text" // Xác định kiểu phản hồi là text
    }
    // Gửi GET request đến "/api/fashions/{fashionId}" để lấy chi tiết fashion theo id
    return this._http.get<any>("/api/fashions/" + fashionId, requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion), // Chuyển đổi dữ liệu nhận về từ text thành đối tượng Fashion
      retry(3), // Thử lại tối đa 3 lần nếu gặp lỗi
      catchError(this.handleError) // Xử lý lỗi trong quá trình gọi API
    );
  }

  // post new fashion
  postFashion(afashion: Fashion): Observable<any> {
    // Đặt header "Content-Type" để gửi dữ liệu dưới dạng JSON
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text" // Xác định kiểu phản hồi là text
    }
    // Gửi POST request để tạo một fashion mới
    return this._http.post<any>("/api/fashions", JSON.stringify(afashion), requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion), // Chuyển đổi dữ liệu nhận về từ text thành đối tượng Fashion
      retry(3), // Thử lại tối đa 3 lần nếu gặp lỗi
      catchError(this.handleError) // Xử lý lỗi trong quá trình gọi API
    );
  }

  // put fashion
  putFashion(afashion: Fashion): Observable<any> {
    // Đặt header "Content-Type" để gửi dữ liệu dưới dạng JSON
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text" // Xác định kiểu phản hồi là text
    }
    // Gửi PUT request để cập nhật fashion
    return this._http.put<any>("/api/fashions", JSON.stringify(afashion), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion>), // Chuyển đổi dữ liệu nhận về từ text thành mảng Fashion
      retry(3), // Thử lại tối đa 3 lần nếu gặp lỗi
      catchError(this.handleError) // Xử lý lỗi trong quá trình gọi API
    );
  }

  // delete fashion
  deleteFashion(fashionId: string): Observable<any> {
    // Đặt header "Content-Type" để yêu cầu dữ liệu dưới dạng JSON
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text" // Xác định kiểu phản hồi là text
    }
    // Gửi DELETE request để xóa một fashion theo fashionId
    return this._http.delete<any>("/api/fashions/" + fashionId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion>), // Chuyển đổi dữ liệu nhận về từ text thành mảng Fashion
      retry(3), // Thử lại tối đa 3 lần nếu gặp lỗi
      catchError(this.handleError) // Xử lý lỗi trong quá trình gọi API
    );
  }

  // Phương thức xử lý lỗi
  handleError(error: HttpErrorResponse) {
    // Trả về lỗi dưới dạng throwError, giúp người gọi có thể xử lý khi xảy ra lỗi
    return throwError(() => new Error(error.message))
  }
}
