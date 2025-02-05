import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from './registration.model';  // Import model

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;  // Khai báo form group với dấu "!" để TypeScript không báo lỗi
  jsonString: string = '';  // Biến chứa chuỗi JSON sau khi submit form

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],  // Tên là bắt buộc
      email: ['', [Validators.required, Validators.email]],  // Email là bắt buộc và phải đúng định dạng email
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],  // Điện thoại bắt buộc và phải là 10 số
      course: ['', Validators.required],  // Khóa học là bắt buộc
      time: ['', Validators.required],    // Ca học là bắt buộc
      terms: [false, Validators.requiredTrue]  // Đồng ý với điều khoản là bắt buộc
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.jsonString = JSON.stringify(this.registrationForm.value);  // Chuyển dữ liệu form thành JSON
    } else {
      this.registrationForm.markAllAsTouched();  // Đánh dấu tất cả các trường là đã được kiểm tra
    }
  }

  // Kiểm tra trạng thái hợp lệ của các trường form
  get formControls() {
    return this.registrationForm.controls;
  }
}
