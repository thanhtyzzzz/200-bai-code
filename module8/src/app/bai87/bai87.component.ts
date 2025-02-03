import { Component } from '@angular/core';

@Component({
  selector: 'app-bai87',
  templateUrl: './bai87.component.html',
  styleUrls: ['./bai87.component.css']
})
export class Bai87Component {

    products: any[] = [
      { id: 'P1', name: 'Coca Cola', price: 15000, img: 'assets/image/cocacola.png' },
      { id: 'P2', name: 'Pepsi', price: 18000, img: 'assets/image/pepsi.jpg' },
      { id: 'P33', name: 'Heniken', price: 20000, img: 'assets/image/heniken.jpg' }
    ];
  
}
