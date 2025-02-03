import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsImage=[
    {"ProductId":"P1","ProductName":"Coca Cola","Price":15000,"Image":"assets/image/cocacola.png"},
    {"ProductId":"P2","ProductName":"Pepsi","Price":18000,"Image":"assets/image/pepsi.jpg"},
    {"ProductId":"P3","ProductName":"Heniken","Price":20000,"Image":"assets/image/heniken.jpg"},
    ]
    constructor() { }
    getProductsWithImages()
    {
    return this.productsImage
    }
    getProductDetail(id:any){
    return this.productsImage.find(x=>x.ProductId==id)
    }
}
