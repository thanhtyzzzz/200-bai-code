import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Để lấy tham số từ URL và điều hướng
import { Fashion } from '../interfaces/Fashion'; // Mô hình dữ liệu Fashion
import { ClientFashionService } from '../services/client-fashion.service'; // Dịch vụ để lấy dữ liệu fashion

@Component({
  selector: 'app-client-fashion-detail', // Tên selector cho component này
  templateUrl: './client-fashion-detail.component.html', // Đường dẫn đến file template
  styleUrls: ['./client-fashion-detail.component.css'] // Đường dẫn đến file CSS
})
export class ClientFashionDetailComponent {
  fashion = new Fashion(); // Khởi tạo một đối tượng fashion để lưu trữ dữ liệu thời trang
  id: string = ''; // Mã id của fashion từ URL
  errMessage: string = ''; // Biến để lưu trữ thông báo lỗi nếu có

  constructor(
    private _service: ClientFashionService, // Inject service để lấy dữ liệu fashion
    private _router: Router, // Inject Router để điều hướng giữa các trang
    private _activeroute: ActivatedRoute // Inject ActivatedRoute để lấy tham số từ URL
  ) {
    // Lắng nghe sự thay đổi của tham số trong URL (ví dụ: /fashions/:id)
    this._activeroute.params.subscribe(params => {
      this.id = params['id']; // Lấy giá trị 'id' từ tham số URL

      if (this.id != null) {
        this.searchFashion(this.id); // Gọi hàm searchFashion nếu id hợp lệ
      } else {
        // Nếu không có id hợp lệ, thông báo lỗi và điều hướng về trang danh sách thời trang
        window.alert('Invalid fashion id to show');
        this._router.navigate(['/fashions']); // Điều hướng về trang danh sách fashion
      }
    });
  }

  // Hàm tìm kiếm chi tiết fashion theo id
  searchFashion(fashionId: string) {
    // Gọi service để lấy dữ liệu fashion từ API
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { 
        // Nếu lấy thành công, gán dữ liệu trả về vào fashion
        this.fashion = data; 
      },
      error: (err) => { 
        // Nếu có lỗi, gán thông báo lỗi vào errMessage
        this.errMessage = err; 
      },
    });
  }
}
