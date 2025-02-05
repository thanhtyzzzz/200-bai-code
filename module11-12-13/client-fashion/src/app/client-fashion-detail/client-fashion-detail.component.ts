import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../interfaces/Fashion';
import { ClientFashionService } from '../services/client-fashion.service';

@Component({
  selector: 'app-client-fashion-detail',
  templateUrl: './client-fashion-detail.component.html',
  styleUrls: ['./client-fashion-detail.component.css']
})
export class ClientFashionDetailComponent {
  fashion = new Fashion() // fashion data to show
  id: string = '' // fashion id
  errMessage: string = ''

  constructor(private _service: ClientFashionService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null){
        this.searchFashion(this.id) // get fashionselected
      } else {
        window.alert('Invalid fashion id to show')
        this._router.navigate(['/fashions'])
      }
    })
  }

  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
