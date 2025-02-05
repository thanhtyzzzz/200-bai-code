import { Component } from '@angular/core';
import { AdminFashionService } from '../services/admin-fashion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
  fashions: any;
  errMessage: string = ''
  constructor(public _service: AdminFashionService, private _router: Router) {
    this.getFashions()
  }

  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  createFashion() {
    this._router.navigate(['/fashions/new'])
  }

  updateFashion(fashionId: string) {
    this._router.navigate(['/fashions/edit', fashionId])
  }

  detailFashion(fashionId: string) {
    this._router.navigate(['/fashions/detail', fashionId])
  }

  

  deleteFashion(fashionId: string) {
    // confirm delete
    if (confirm("Are you sure to delete this fashion?")) {
      this._service.deleteFashion(fashionId).subscribe({
        next: (data) => { this.fashions = data },
        error: (err) => { this.errMessage = err }
      })

      this.getFashions()
    }
  }
}
