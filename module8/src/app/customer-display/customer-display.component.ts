import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-display',
  templateUrl: './customer-display.component.html',
  styleUrl: './customer-display.component.css'
})
export class CustomerDisplayComponent {
  customer = {
    "Id": "Cus123",
    "Name": "Obama",
    "Email": "obama@gmail.com",
    "Age": 67,
    "Image": "assets/image/obama.png"
  };
customerData: any;
}
