import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  datas=[
    {"Cateid":"cate1","CateName":"Nước Ngọt",
    "Products":[
      {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"assets/image/cocacola.png"},
      {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"assets/image/pepsi.jpg"},
      {"ProductId":"p3","ProductName":"Red Bull","Price":200,"Image":"assets/image/redbull.jpg"}
    ]
    },
    {"Cateid":"cate2","CateName":"Bia",
    "Products":[
      {"ProductId":"p4","ProductName":"Heniken","Price":500,"Image":"assets/image/heniken.jpg"},
      {"ProductId":"p5","ProductName":"333","Price":400,"Image":"assets/image/333.jpg"},
      {"ProductId":"p6","ProductName":"Tiger","Price":600,"Image":"assets/image/tiger.png"},
    ]
    },
    ]
    constructor() { }
    getCategories()
    {
    return this.datas
    }
}
