import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerData: any[] = [];
  private _url = 'assets/data/customers.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCustomers().subscribe(data => {
      this.customerData = data;
    });
  }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this._url);
  }
}
