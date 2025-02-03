import { Component } from '@angular/core';
import { CatalogService } from '../catalog.service';  // Nhập dịch vụ CatalogService để lấy dữ liệu

@Component({
  selector: 'app-catalog',  // Tên selector cho component này
  templateUrl: './catalog.component.html',  // Liên kết với template HTML
  styleUrls: ['./catalog.component.css']  // Liên kết với file CSS để định dạng giao diện
})
export class CatalogComponent {
  categories: any[] = [];  // Biến để lưu danh sách các danh mục (categories)

  constructor(private catalogService: CatalogService) { 
    // Constructor nhận đối tượng CatalogService để sử dụng trong component
  }

  ngOnInit(): void {
    // Phương thức này sẽ được gọi khi component được khởi tạo
    this.categories = this.catalogService.getCategories();  // Lấy danh sách categories từ CatalogService
  }
}
