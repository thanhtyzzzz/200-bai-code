import { Component } from '@angular/core';
import { FashionAPIService } from '../service/fashion-api.service';
import { Fashion } from '../interface/Fashion';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrl: './fashion-detail.component.css'
})
export class FashionDetailComponent {
  fashionId: string = ''
  fashion = new Fashion()
  errMessage: string = ''
  checkId: boolean = false

  constructor(private _service: FashionAPIService) { }

  searchFashion(fashionId: string) {
    if (!/^[0-9a-fA-F]{24}$/.test(fashionId)) {
      this.invalidId()
    } else {
      this._service.getFashion(fashionId).subscribe({
        next: (data) => { this.fashion = data },
        error: (err) => { this.errMessage = err },
      })
      this.checkId = true
    }
  }

  invalidId() {
    this.errMessage = 'Invalid fashion id'
    this.checkId = false
  }

  reset() {
    this.fashionId = ''
    this.errMessage = ''
    this.checkId = false
  }
}
