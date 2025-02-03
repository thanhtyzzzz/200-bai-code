import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-bai88',
  templateUrl: './bai88.component.html',
  styleUrls: ['./bai88.component.css']
})
export class Bai88Component {
  public products:any
  constructor(pservice: ProductService, private router:Router){
  this.products=pservice.getProductsWithImages()
  }
  viewDetail(product: any) {
    this.router.navigate(['bai88', product.ProductId]);
  }
}
