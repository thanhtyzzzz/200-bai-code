import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../interfaces/Fashion';
import { AdminFashionService } from '../services/admin-fashion.service';

@Component({
  selector: 'app-fashion-update',
  templateUrl: './fashion-update.component.html',
  styleUrls: ['./fashion-update.component.css']
})
export class FashionUpdateComponent {
  fashion = new Fashion() // fashion data to update
  errMessage: string = ''
  fashionselected = new Fashion() // fashion selected with id
  id: string = '' // id of fashion selected

  constructor(private _service: AdminFashionService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null){
        this.searchFashion(this.id) // get fashionselected
        this.reset() // reset fashion to update
      } else {
        window.alert('Invalid fashion id to update')
        this._router.navigate(['/fashions'])
      }
    })
  }

  public setFashion(f: Fashion) {
    this.fashion = f
  }

  // put fashion
  putFashion(fashionId: string) {
    if (this.validate(fashionId)) {
      this.searchFashion(fashionId) // get fashionselected
      this.fashion.fashion_image = this.fashionselected.fashion_image // keep image
      this._service.putFashion(this.fashion).subscribe({
        next: (data) => { this.success() },
        error: (err) => { this.errMessage = err },
      })
    }
  }

  // search fashion
  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashionselected = data },
      error: (err) => { this.errMessage = err },
    })
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

  // reset
  reset() {
    this.fashion = new Fashion()
    this.fashion = this.fashionselected
    this.fashion.date_added = new Date()
    this.errMessage = ''
  }

  validate(fashionId: string) {
    // check if all fields are filled
    if (this.fashion.style == null || this.fashion.fashion_subject == '' || this.fashion.fashion_detail == '') {
      this.errMessage = 'Please fill all fields'
      return false
    } else {
      // check if fashionId is hex string or not
      if (!/^[0-9a-fA-F]{24}$/.test(fashionId)) {
        this.errMessage = 'Invalid fashion id'
        return false
      } else {
        this.errMessage = ''
        return true
      }
    }
  }

  goBack() {
    this._router.navigate(['/fashions'])
  }

  success() {
    window.alert('Update fashion successfully')
    this.goBack()
  }
}
