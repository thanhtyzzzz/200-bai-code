import { Component } from '@angular/core';
import { FakeProductService } from '../services/fake-product.service';

@Component({
  selector: 'app-bai101-fakeproduct',
  templateUrl: './bai101-fakeproduct.component.html',
  styleUrls: ['./bai101-fakeproduct.component.css']
})
export class Bai101FakeproductComponent {
  data:any
  errMessage:string=''
  constructor(_service: FakeProductService){
    _service.getFakeProductData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
