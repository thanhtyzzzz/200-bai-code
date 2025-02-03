import { Component } from '@angular/core';

@Component({
  selector: 'app-bai86',
  templateUrl: './bai86.component.html',
  styleUrls: ['./bai86.component.css'] // Chú ý phải sửa đúng tên file .css
})
export class Bai86Component {
  product = {
    id: 111,
    name: 'Coca Cola',
    price: 150000,
    imageUrl: 'assets/image/cocacola.png' // Chỉnh sửa đường dẫn tới ảnh của bạn
  };
}
