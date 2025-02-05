import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fashion } from '../interfaces/Fashion';
import { AdminFashionService } from '../services/admin-fashion.service';

@Component({
  selector: 'app-fashion-new',
  templateUrl: './fashion-new.component.html',
  styleUrls: ['./fashion-new.component.css']
})
export class FashionNewComponent {
  fashion = new Fashion()
  errMessage: string = ''

  constructor(private _service: AdminFashionService, private _router: Router) { }

  public setFashion(f: Fashion) {
    this.fashion = f
  }

  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  postFashion() {
    if (this.fashion.style == '' || this.fashion.fashion_subject == '' || this.fashion.fashion_detail == '') {
      this.invalidFashion()
    } else {
      this._service.postFashion(this.fashion).subscribe({
        next: (data) => { this.fashion = data, this.success() },
        error: (err) => { this.errMessage = err },
      })
      // this.reset()
    }
  }

  invalidFashion() {
    this.errMessage = 'Invalid fashion. Full information is required'
  }

  // notify user of successful post
  success() {
    window.alert('Fashion successfully posted')
    this.cancel()
  }

  // route admin to fashions page
  cancel() {
    this._router.navigate(['/fashions'])
  }

  // reset() {
  //   this.fashion = new Fashion()
  //   this.errMessage = ''
  // }
}
