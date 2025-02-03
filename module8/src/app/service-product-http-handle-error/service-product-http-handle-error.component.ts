import { Component } from '@angular/core';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-service-product-http-handle-error',
  templateUrl: './service-product-http-handle-error.component.html',
  styleUrl: './service-product-http-handle-error.component.css'
})
export class ServiceProductHttpHandleErrorComponent {
  products:any
  errMessage:string=''
  constructor(_service:ProductHttpService){
  _service.getProductsHandleError().subscribe({
  next:(data)=>{this.products=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}
